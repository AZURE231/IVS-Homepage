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

import {CiViewList} from "react-icons/ci";
import {AiOutlineEye} from "react-icons/ai"

import Card from "../Cards/Cards";
import { BsSpeedometer2 } from "react-icons/bs";

const products = [
  {
    id: 0,
    head: "IFMS",
    description: "Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    icon: BsSpeedometer2,
    img: "https://picsum.photos/id/106/1000/1000",
    href: "#"
  },
  {
    id: 1,
    head: "IHRM",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    icon: CiViewList,
    img: "https://picsum.photos/id/104/1000/1000",
    href: "#"
  },
  {
    id: 2,
    head: "IWMS",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aut odit aut fugit, sed quia magni dolores eos qui ratione voluptatem sequi nesciunt Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
    icon: AiOutlineEye,
    img: "https://picsum.photos/id/103/1000/1000",
    href: "#"
  },
  {
    id: 3,
    head: "IVS Workflow",
    description: "Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    icon: BsSpeedometer2,
    img: "https://picsum.photos/id/102/1000/1000",
    href: "#"
  },
  {
    id: 4,
    head: "kintone",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    icon: CiViewList,
    img: "https://picsum.photos/id/100/1000/1000",
    href: "#"
  },
  {
    id: 5,
    head: "Aizen",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aut odit aut fugit, sed quia magni dolores eos qui ratione voluptatem sequi nesciunt Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
    icon: AiOutlineEye,
    img: "https://picsum.photos/id/101/1000/1000",
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
              icon={<Icon as={product.icon} color={"orange"} w={10} h={10}/>}
              description= {product.description}
              imgs = {product.img}
              href={product.href}
            />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
