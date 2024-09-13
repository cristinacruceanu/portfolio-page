import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
  const handleClick = (anchor) => (event) => {
    event.preventDefault();
    const id = `${anchor}-section`;
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    /* const headerAnimation = () => {
       const [scrollDirection, setScrollDirection] = useState("up");
       const lastScrollY = useRef(0);
       const headerRef = useRef(null);

       const handleScroll = () => {
         const currentScrollY = window.scrollY;
         if (currentScrollY > lastScrollY.current) {
           setScrollDirection("down");
         } else {
           setScrollDirection("up");
         }
         lastScrollY.current = currentScrollY;
       };
       useEffect(() => {
         window.removeEventListener("scroll", handleScroll);
         return () => {
           window.removeEventListener("scroll", handleScroll);
         };
       }, []);
       useEffect(() => {
         if (headerRef.current) {
           if (scrollDirection === "down") {
             headerRef.current.style.transform = "translateY(-200px)";
           } else {
             headerRef.current.style.transform = "translateY(0)";
           }
         }
       }, [scrollDirection]);
     };

*/

    };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      zIndex={1000}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={8}>
              {socials.map((social) => {
                /* another solution:
                  target={social.url.startsWith("https") ? "_blank" : "_self"}
                      rel={social.url.startsWith("https") ? "noopener noreferrer" : ""} */
                if (social.url.includes("https")) {
                  return (
                    <a
                      href={social.url}
                      key={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon
                        icon={social.icon}
                        size="2x"
                      ></FontAwesomeIcon>
                    </a>
                  );
                }
                return null;
              })}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              <a href="#contactme-section" onClick={handleClick("contactme")}>
                Contact me
              </a>
              <a href="#projects-section" onClick={handleClick("projects")}>
                Projects
              </a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
