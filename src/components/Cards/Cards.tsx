import {
  Heading,
  Box,
  Center,
  Image,
  Flex,
  Text,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";

import { ReactElement } from "react";

interface CardProps {
  heading: string;
  description: string;
  icon: ReactElement;
  href: string;
}

export default function Card ({ heading, description, icon, href }: CardProps) {
  return (
    <Center py={6}>
      <Box
        maxW={"350px"}
        w={"full"}
        maxH={"500px"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"md"}
        overflow={"hidden"}
      >
        <Image
          h={"200px"}
          w={"full"}
          src={
            "https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
          }
          objectFit={"cover"}
        />
        <Flex justify={"center"} mt={-12} _hover={{color:"orange"}}>
          {icon}
        </Flex>

        <Box p={6} cursor={"pointer"}>
          <Stack spacing={0} align={"center"} mb={5}>
            <Heading mt={"10px"} fontSize={"2xl"} fontWeight={500} fontFamily={"body"} _hover={{color:"orange"}}>
              {heading}
            </Heading>
            <Text mt={"10px"} color={"gray.500"}>{description}</Text>
          </Stack>
        </Box>
      </Box>
    </Center>
  );
};
