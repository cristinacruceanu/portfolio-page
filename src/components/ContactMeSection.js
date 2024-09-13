import React, { useEffect } from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from "yup";
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";

const LandingSection = () => {
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      type: "",
      comment: "",
    },

    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      email: Yup.string().required("Required"),
      type: Yup.string().required("Required"),
      comment: Yup.string().required("Required"),
    }),

    onSubmit: (values) => {
      submit(values);

      if (!isLoading && response) {
        onOpen({
          isOpen: true,
          type: response.type,
          message: response.message,
        });

        formik.resetForm();
      }
    },
  });

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={16}
      spacing={8}
    >
      <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1" id="contactme-section">
          Contact me
        </Heading>
        <Box p={6} rounded="md" w="100%">
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>
              <FormControl
                isInvalid={formik.touched.firstName && formik.errors.firstName}
              >
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  {...formik.getFieldProps("firstName")}
                />
                {formik.touched.firstName && formik.errors.firstName ? (
                  <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
                ) : null}
              </FormControl>
              <FormControl
                isInvalid={formik.touched.email && formik.errors.email}
              >
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  {...formik.getFieldProps("email")}
                />
                {formik.touched.email && formik.errors.email ? (
                  <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                ) : null}
              </FormControl>
              <FormControl
                isInvalid={formik.touched.type && formik.errors.type}
              >
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select
                  id="type"
                  name="type"
                  placeholder="Select an option"
                  {...formik.getFieldProps("type")}
                >
                  <option value="hireMe" style={{ backgroundColor: "#351b6e" }}>
                    Freelance project proposal
                  </option>
                  <option
                    value="openSource"
                    style={{ backgroundColor: "#351b6e" }}
                  >
                    Open source consultancy session
                  </option>
                  <option value="other" style={{ backgroundColor: "#351b6e" }}>
                    Other
                  </option>
                </Select>
                {formik.touched.type && formik.errors.type ? (
                  <FormErrorMessage>{formik.errors.type}</FormErrorMessage>
                ) : null}
              </FormControl>
              <FormControl
                isInvalid={formik.touched.comment && formik.errors.comment}
              >
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  height={250}
                  {...formik.getFieldProps("comment")}
                />
                {formik.touched.comment && formik.errors.comment ? (
                  <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
                ) : null}
              </FormControl>
              <Button
                type="submit"
                colorScheme="purple"
                width="full"
                isLoading={isLoading}
              >
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;

/* Solution

import React, {useEffect} from "react";
import { useFormik } from "formik";
import {
 Box,
 Button,
 FormControl,
 FormErrorMessage,
 FormLabel,
 Heading,
 Input,
 Select,
 Textarea,
 VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import {useAlertContext} from "../context/alertContext";

/**
* Covers a complete form implementation using formik and yup for validation
*/
/*
const ContactMeSection = () => {
 const {isLoading, response, submit} = useSubmit();
 const { onOpen } = useAlertContext();

 const formik = useFormik({
   initialValues: {
     firstName: "",
     email: "",
     type: "hireMe",
     comment: "",
   },
   onSubmit: (values) => {
     submit('https://john.com/contactme', values);
   },
   validationSchema: Yup.object({
     firstName: Yup.string().required("Required"),
     email: Yup.string().email("Invalid email address").required("Required"),
     comment: Yup.string()
       .min(25, "Must be at least 25 characters")
       .required("Required"),
   }),
 });

 useEffect(() => {
   if (response) {
     onOpen(response.type, response.message);
     if (response.type === 'success') {
       formik.resetForm();
     }
   }
 }, [response]);

 return (
   <FullScreenSection
     isDarkBackground
     backgroundColor="#512DA8"
     py={16}
     spacing={8}
   >
     <VStack w="1024px" p={32} alignItems="flex-start">
       <Heading as="h1" id="contactme-section">
         Contact me
       </Heading>
       <Box p={6} rounded="md" w="100%">
         <form onSubmit={formik.handleSubmit}>
           <VStack spacing={4}>
             <FormControl isInvalid={!!formik.errors.firstName && formik.touched.firstName}>
               <FormLabel htmlFor="firstName">Name</FormLabel>
               <Input
                 id="firstName"
                 name="firstName"
                 {...formik.getFieldProps("firstName")}
               />
               <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
             </FormControl>
             <FormControl isInvalid={!!formik.errors.email && formik.touched.email}>
               <FormLabel htmlFor="email">Email Address</FormLabel>
               <Input
                 id="email"
                 name="email"
                 type="email"
                 {...formik.getFieldProps("email")}
               />
               <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
             </FormControl>
             <FormControl>
               <FormLabel htmlFor="type">Type of enquiry</FormLabel>
               <Select id="type" name="type" {...formik.getFieldProps("type")}>
                 <option value="hireMe">Freelance project proposal</option>
                 <option value="openSource">
                   Open source consultancy session
                 </option>
                 <option value="other">Other</option>
               </Select>
             </FormControl>
             <FormControl isInvalid={!!formik.errors.comment && formik.touched.comment}>
               <FormLabel htmlFor="comment">Your message</FormLabel>
               <Textarea
                 id="comment"
                 name="comment"
                 height={250}
                 {...formik.getFieldProps("comment")}
               />
               <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
             </FormControl>
             <Button type="submit" colorScheme="purple" width="full" isLoading={isLoading}>
               Submit
             </Button>
           </VStack>
         </form>
       </Box>
     </VStack>
   </FullScreenSection>
 );
};

export default ContactMeSection;
*/

/*
The email input is also required. Observe how Yup already provides us with common validators out of the box, like one to verify that what users type is a valid email. If incorrect, Formik will register an error on that input with the error message “Invalid email address”. Quite straightforward right?
email: Yup.string().email("Invalid email address").required("Required"),


Finally, I am making the comment field mandatory, with a minimum length of 25 characters.
comment: Yup.string()
 .min(25, "Must be at least 25 characters")
 .required("Required"),
*/