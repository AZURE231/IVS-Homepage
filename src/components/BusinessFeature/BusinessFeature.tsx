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
      "Indivi Factory Management System (IFMS) là giải pháp quản lý sản xuất được phát triển bởi công ty IVS. IFMS là một phần mềm dễ dàng sử dụng và có khả năng tích hợp được nhiều thông tin. IFMS hiện thực hóa mọi ý tưởng quản lý của bạn.",
    icon: BsSpeedometer2,
    img: "https://picsum.photos/id/106/500/500",
    href: "#",
  },
  {
    id: 1,
    head: "IHRM",
    description:
      "Indivi Human Resources Management (IHRM) là phần mềm quản lý thông tin nhân viên, chấm công, tính lương, và các nghiệp vụ nhân sự khác. IHRM được kiểm chứng thực tiễn cho nhiều khách hàng ở Việt Nam.",
    icon: CiViewList,
    img: "https://picsum.photos/id/104/500/500",
    href: "#",
  },
  {
    id: 2,
    head: "IWMS",
    description:
      "Indivi Warehouse Management System (IWMS) là một giải pháp quản lý hàng tồn kho được xây dựng bởi các kỹ sư hàng đầu của công ty IVS. IWMS là sự lựa chọn tối ưu cho các công ty muốn quản lý tồn kho một cách hiệu quả và chuyên nghiệp.",
    icon: AiOutlineEye,
    img: "https://picsum.photos/id/103/500/500",
    href: "#",
  },
  {
    id: 3,
    head: "IVS Workflow",
    description:
      "IVS WORKFLOW là bộ sản phẩm dành cho quy trình phê duyệt trong doanh nghiệp qua nhiều cấp bao gồm chữ kí điện tử và email phê duyệt. IVS WORKFLOW giúp doanh nghiệp tiết kiệm thời gian và giảm chi phí cho việc quản lý hồ sơ giấy tờ.",
    icon: BsSpeedometer2,
    img: "https://picsum.photos/id/102/500/500",
    href: "#",
  },
  {
    id: 4,
    head: "kintone",
    description:
      "kintone là dịch vụ điện toán đám mây cho phép người dùng nhanh chóng hệ thống hóa quản lý dựa trên nền tảng nghiệp vụ của từng công ty. Có hai phiên bản: kintone Light và kintone Standard linh động theo nhu cầu của người dùng.",
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
