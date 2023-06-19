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

import { motion, isValidMotionProp } from "framer-motion";
import { ReactElement } from "react";


interface CardProps {
  heading: string;
  description: string;
  icon: ReactElement;
  href: string;
  imgs: string;
}

export default function Card({
  heading,
  description,
  icon,
  href,
  imgs,
}: CardProps) {
  return (
    <Center py={6}>
      <motion.div
        initial={{ y: 150 }}
        whileInView={{ y: 0 }}
        transition={{ type: "spring", damping: 30}}
        viewport={{ once: true }}
      >
        <Box
          maxW={"350px"}
          w={"full"}
          minH={"500px"}
          bg={useColorModeValue("white", "gray.800")}
          boxShadow={"2xl"}
          rounded={"md"}
          overflow={"hidden"}
        >
          <Image h={"200px"} w={"full"} src={imgs} objectFit={"cover"} />
          <Flex justify={"center"} mt={-8}>
            <Center backgroundColor={"white"} rounded={"100%"} boxSize={"60px"}>
              {icon}
            </Center>
          </Flex>

          <Box p={6} cursor={"pointer"}>
            <Stack spacing={0} align={"center"} mb={5}>
              <Heading
                fontSize={"2xl"}
                fontWeight={500}
                fontFamily={"body"}
                transition={"all 0.5s"}
                _hover={{ color: "orange" }}
              >
                {heading}
              </Heading>
              <Text mt={"10px"} color={"gray.500"}>
                {description}
              </Text>
            </Stack>
          </Box>
        </Box>
      </motion.div>
    </Center>
  );
}
