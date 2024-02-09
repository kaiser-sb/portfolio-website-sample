import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <HStack>
      <VStack
        backgroundColor="white"
        color="black" h="full" 
        alignItems="flex-start"
        cursor="pointer"
        borderRadius={5}
      >
        <Image borderRadius={5} src={imageSrc} alt={title} />
        <Box paddingLeft={2} paddingRight={2}>
          <Heading as="h4" size="sm">{title }</Heading>
          <Text marginTop={2} fontSize="small">{description}</Text>
          <Heading marginTop={10} marginBottom={2} as="h6" fontSize="small">See more <FontAwesomeIcon icon={faArrowRight} size="1x" /></Heading>
        </Box>
      </VStack>
    </HStack>
  )
};

export default Card;
