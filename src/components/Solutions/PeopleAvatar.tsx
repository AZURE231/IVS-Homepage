import {
  Avatar,
  Text,
  Box,
  Flex,
  keyframes,
  Container,
  Stack,
  Heading,
  VStack,
} from "@chakra-ui/react";

interface AvatarProps {
  id: number;
  img: string;
  head: string;
  description: string;
}
export default function PeopleAvatar({ id, img, head, description }: AvatarProps) {
  const size = "96px";

  return (
    <VStack
      key={id}
      bgColor={"#f2f2f2"}
      justifyContent="center"
      alignItems="center"
      
      w="full"
      overflow="hidden"
    >
      {/* Ideally, only the box should be used. The <Flex /> is used to style the preview. */}
      <Box as="div" position="relative" w={size} h={size}>
        <Avatar
          src={img}
          size="full"
          position="absolute"
          top={0}
        />
      </Box>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={"2xl"}>{head}</Heading>
        <Text color={"gray.600"} fontSize={"xl"}>
          {description}
        </Text>
      </Stack>
    </VStack>
  );
}
