import {
  Box,
  SimpleGrid,
  Container,
  Heading,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react";
import { ReactElement } from "react";
import {
  FcAbout,
  FcAssistant,
  FcCollaboration,
  FcDonate,
  FcManager,
} from "react-icons/fc";

import Card from "../Cards/Cards";

const products = [
  {
    id: 0,
    head: "IFMS",
    description: "Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    href: "#"
  },
  {
    id: 1,
    head: "IHRM",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    href: "#"
  },
  {
    id: 2,
    head: "IWMS",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aut odit aut fugit, sed quia magni dolores eos qui ratione voluptatem sequi nesciunt Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
    href: "#"
  },
  {
    id: 3,
    head: "IVS Workflow",
    description: "Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    href: "#"
  },
  {
    id: 4,
    head: "kintone",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    href: "#"
  },
  {
    id: 5,
    head: "Aizen",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aut odit aut fugit, sed quia magni dolores eos qui ratione voluptatem sequi nesciunt Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
    href: "#"
  },
]

export default function BusinessFeature() {
  return (
    <Box p={20}>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={{ base: "2xl", sm: "4xl" }} fontWeight={"bold"}>
          SẢN PHẨM PHẦN MỀM
        </Heading>
        <Text color={"gray.600"} fontSize={{ base: "sm", sm: "lg" }}>
          Ứng dụng công nghệ cao cho cuộc sống dễ dàng hơn.
        </Text>
      </Stack>

      <Container maxW={"6xl"} mt={12}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={0}>
          {products.map((product) => (
            <Card
              heading={product.head}
              icon={<Icon as={FcAssistant} w={10} h={10} />}
              description= {product.description}
              href={product.href}
            />
          ))}
        </SimpleGrid>
        {/* <Flex flexWrap="wrap" gridGap={6} justify="center">
          <Card
            heading={"IFMS"}
            icon={<Icon as={FcAssistant} w={10} h={10} />}
            description={
              "Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            }
            href={"#"}
          />
          <Card
            heading={"IHRM"}
            icon={<Icon as={FcCollaboration} w={10} h={10} />}
            description={
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
            }
            href={"#"}
          />
          <Card
            heading={"IWMS"}
            icon={<Icon as={FcDonate} w={10} h={10} />}
            description={
              "Nemo enim ipsam voluptatem quia voluptas sit aut odit aut fugit, sed quia magni dolores eos qui ratione voluptatem sequi nesciunt Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet."
            }
            href={"#"}
          />
          <Card
            heading={"IVS Workflow"}
            icon={<Icon as={FcManager} w={10} h={10} />}
            description={
              "Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            }
            href={"#"}
          />
          <Card
            heading={"kintone"}
            icon={<Icon as={FcAbout} w={10} h={10} />}
            description={
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
            }
            href={"#"}
          />
          <Card
            heading={"Aizen"}
            icon={<Icon as={FcAbout} w={10} h={10} />}
            description={
              "Nemo enim ipsam voluptatem quia voluptas sit aut odit aut fugit, sed quia magni dolores eos qui ratione voluptatem sequi nesciunt Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet."
            }
            href={"#"}
          />
        </Flex> */}
      </Container>
    </Box>
  );
}
