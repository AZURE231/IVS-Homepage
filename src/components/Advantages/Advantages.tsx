import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { CiPizza } from "react-icons/ci";
import { CiApple } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { CiLemon } from "react-icons/ci";
import { CiMemoPad } from "react-icons/ci";
import { CiPen } from "react-icons/ci";

// Replace test data with your own
const features = [
  {
    id: 0,
    title: "Đội ngũ nhân sự giàu kinh nghiệm",
    text: "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident",
    logo: CiApple,
  },
  {
    id: 1,
    title: "Giao diện thân thiện với người dùng",
    text: "Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata",
    logo: CiInstagram,
  },
  {
    id: 2,
    title: "Linh động theo từng khách hàng",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
    logo: CiLemon,
  },
  {
    id: 3,
    title: "Dịch vụ hỗ trợ nhanh chóng",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
    logo: CiMemoPad,
  },
  {
    id: 4,
    title: "Sản phẩm theo tiêu chuẩn Nhật Bản",
    text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque",
    logo: CiPen,
  },
  {
    id: 5,
    title: "Có chi nhánh trên toàn quốc",
    text: "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi",
    logo: CiPizza,
  },
];

export default function Advantages() {
  return (
    <Box p={4} mt={10}>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={"3xl"}>LỢI THẾ CẠNH TRANH CỦA IVS</Heading>
        <div className="decorateLineGray">
          <div className="decorateLineOrange"></div>
        </div>
        <Text color={"gray.600"} fontSize={"xl"}>
        &quot;Chúng tôi luôn coi khách hàng là khách mời tham dự một bữa tiệc mà
          chúng tôi là chủ nhà&quot; -Jeff Bezos (Amazon)-
        </Text>
      </Stack>

      <Container maxW={"6xl"} mt={10} >
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          {features.map((feature) => (
            <HStack key={feature.id} align={"top"} _hover={{ color: "orange" }}>
              <Box color={"orange"} px={2}>
                <Icon as={feature.logo} fontSize={"50px"} />
              </Box>
              <VStack align={"start"}>
                <Text
                  transition={"all 0.5s"}
                  fontWeight={700}
                  fontSize={20}
                  cursor={"pointer"}
                >
                  {feature.title}
                </Text>
                <Text color={"gray.600"}>{feature.text}</Text>
              </VStack>
            </HStack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
