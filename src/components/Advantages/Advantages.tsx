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
import { motion } from "framer-motion";

// Replace test data with your own
const features = [
  {
    id: 0,
    title: "Đội ngũ nhân sự giàu kinh nghiệm",
    text: "Với đội ngũ chuyên gia giàu kinh nghiệm trong các linh vực quản lý bán hàng, sản xuất và logistics. Chúng tôi đã triển khai thành công nhiều dự án với nhiều thị trường trên thế giới.",
    logo: CiApple,
  },
  {
    id: 1,
    title: "Giao diện thân thiện với người dùng",
    text: "Được thiết kế bởi các chuyên gia, các sản phẩm phần mềm do công ty IVS xây dựng đểu có giao diện thân thiện, dễ sử dụng. Người dùng có thể dễ dàng sử dụng hệ thống của IVS mà không cần đến tài liệu hướng dẫn.",
    logo: CiInstagram,
  },
  {
    id: 2,
    title: "Linh động theo từng khách hàng",
    text: "Tại Công ty IVS, các chuyên gia không chỉ tiếp nhận các yêu cầu mà còn tư vấn về xây dựng hệ thống linh động tùy theo nét đặc trưng của từng khách hàng nhằm đảm bảo sự dễ dàng khi sử dụng cho người dùng.",
    logo: CiLemon,
  },
  {
    id: 3,
    title: "Dịch vụ hỗ trợ nhanh chóng",
    text: "Đội ngũ bảo trì, hỗ trợ vận hành, xử lí sự cố trong suốt quá trình sử dụng hệ thống. Các nhân viên của IVS nhiệt tình hỗ trợ giúp khách hàng yên tâm vì luôn có chuyên gia bên cạnh mình khi sử dụng hệ thống.",
    logo: CiMemoPad,
  },
  {
    id: 4,
    title: "Sản phẩm theo tiêu chuẩn Nhật Bản",
    text: "Tại IVS, chất lượng sản phẩm luôn là tiêu chuẩn hàng đầu. Chúng tôi cam kết mang đến cho khách hàng sự hài lòng nhất khi lựa chọn IVS để xây dụng hệ thống cho quý khách hàng.",
    logo: CiPen,
  },
  {
    id: 5,
    title: "Có chi nhánh trên toàn quốc",
    text: "Hiện tại, Công ty IVs đã có 4 chi nhánh trên 3 miền Bắc - Trung - Nam nhằm đảm bảo hỗ trợ khách hàng tốt nhất, nhanh chóng nhất.",
    logo: CiPizza,
  },
];


export default function Advantages() {
  return (
    <Box p={4} mt={10}>
      <motion.div
        initial={{ y: 100 }}
        whileInView={{ y: 0 }}
        transition={{ type: "spring", damping: 10 }}
        viewport={{ once: true }}
      >
        <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
          <Heading fontSize={"3xl"}>LỢI THẾ CẠNH TRANH CỦA IVS</Heading>
          <div className="decorateLineGray">
            <div className="decorateLineOrange"></div>
          </div>
          <Text color={"gray.600"} fontSize={"xl"}>
            &quot;Chúng tôi luôn coi khách hàng là khách mời tham dự một bữa
            tiệc mà chúng tôi là chủ nhà&quot; -Jeff Bezos (Amazon)-
          </Text>
        </Stack>
      </motion.div>

      <Container maxW={"6xl"} mt={10}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              initial={{ y: 100 }}
              whileInView={{ y: 0 }}
              transition={{ type: "spring", damping: 10 }}
              viewport={{ once: true }}
            >
              <HStack align={"top"} _hover={{ color: "orange" }}>
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
            </motion.div>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
