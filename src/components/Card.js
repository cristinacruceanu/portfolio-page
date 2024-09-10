import { Heading, HStack, Image, Text, VStack, Button } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack
      alignItems="flex-start"
      textColor="#000000"
      backgroundColor="#ffff"
      borderRadius="lg"
      overflow="hidden"
    >
      <Image
        src={imageSrc}
        alt={description}
        borderRadius="lg"
        height="100%"
        width="auto"
      />
      <VStack alignItems="flex-start" padding="1rem">
        <Heading>{title}</Heading>

        <Text>{description}</Text>

        <HStack>
          <Button
            fontWeight="bold"
            rightIcon={<FontAwesomeIcon icon={faArrowRight} size="1x" />}
            variant="ghost"
            padding="0"
          >
            See More
          </Button>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;
