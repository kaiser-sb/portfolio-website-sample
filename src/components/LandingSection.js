import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";


const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={12}>
      <VStack spacing={3}>
        <Avatar src="https://i.pravatar.cc/150?img=7" size="2xl" name="Pete Kroos" />
        <Heading as="h5" size="small" >{greeting}</Heading>
      </VStack>
      <VStack spacing={6}>
        <Heading as="h2" size="2xl" >{bio1}</Heading>
        <Heading as="h2" size="2xl" >{bio2}</Heading>
      </VStack>
    </VStack>
    
  </FullScreenSection>
);

export default LandingSection;
