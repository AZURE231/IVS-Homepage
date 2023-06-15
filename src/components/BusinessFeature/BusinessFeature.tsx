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

import { CiViewList } from "react-icons/ci";
import { AiOutlineEye } from "react-icons/ai";

import Card from "../Cards/Cards";
import { BsSpeedometer2 } from "react-icons/bs";

const products = [
  {
    id: 0,
    head: "IFMS",
    description:
      "Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    icon: BsSpeedometer2,
    img: "https://picsum.photos/id/106/500/500",
    href: "#",
  },
  {
    id: 1,
    head: "IHRM",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    icon: CiViewList,
    img: "https://picsum.photos/id/104/500/500",
    href: "#",
  },
  {
    id: 2,
    head: "IWMS",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aut odit aut fugit, sed quia magni dolores eos qui ratione voluptatem sequi nesciunt Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
    icon: AiOutlineEye,
    img: "https://picsum.photos/id/103/500/500",
    href: "#",
  },
  {
    id: 3,
    head: "IVS Workflow",
    description:
      "Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    icon: BsSpeedometer2,
    img: "https://picsum.photos/id/102/500/500",
    href: "#",
  },
  {
    id: 4,
    head: "kintone",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    icon: CiViewList,
    img: "https://picsum.photos/id/100/500/500",
    href: "#",
  },
  {
    id: 5,
    head: "Aizen",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aut odit aut fugit, sed quia magni dolores eos qui ratione voluptatem sequi nesciunt Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
    icon: AiOutlineEye,
    img: "https://picsum.photos/id/101/500/500",
    href: "#",
  },
];

export default function BusinessFeature() {
  return (
    <Box className="parallax">
      <Box bgColor={"rgba(255,255,255,0.8)"} pt={20} pb={20}>
        <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
          <Heading fontSize={{ base: "2xl", sm: "4xl" }} fontWeight={"bold"}>
            SẢN PHẨM PHẦN MỀM
          </Heading>
          <div className="decorateLineGray">
            <div className="decorateLineOrange"></div>
          </div>

          <Text color={"gray.600"} fontSize={{ base: "sm", sm: "lg" }}>
            Ứng dụng công nghệ cao cho cuộc sống dễ dàng hơn.
          </Text>
        </Stack>

        <Container maxW={"6xl"} mt={12}>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
            {products.map((product) => (
              <Card
                key={product.id}
                heading={product.head}
                icon={<Icon as={product.icon} color={"orange"} w={10} h={10} />}
                description={product.description}
                imgs={product.img}
                href={product.href}
              />
            ))}
          </SimpleGrid>
        </Container>
      </Box>
    </Box>
  );
}
