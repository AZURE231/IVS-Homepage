import {
  Heading,
  Stack,
  Container,
  Image,
} from "@chakra-ui/react";
import React, { Component } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";

const partnerList = [
  {
    id: 0,
    img: "https://indivisys.vn/img/lgo-ntt.jpeg",
  },
  {
    id: 1,
    img: "https://indivisys.vn/img/partner2.jpeg",
  },
  {
    id: 2,
    img: "https://indivisys.vn/img/logo_kddi_01.jpeg",
  },
  {
    id: 3,
    img: "https://indivisys.vn/img/Cybozu-logo-2.jpeg",
  },
  {
    id: 4,
    img: "https://indivisys.vn/img/logo_chatwork.jpeg",
  },
  {
    id: 5,
    img: "https://indivisys.vn/img/logo_keyence.jpeg",
  },
];


export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 700,
      slidesToShow: 5,
      swipeToSlide: true,
      autoplay: true,
      autoplaySpeed: 3000,
      cssEase: "linear",
      pauseOnHover: true,
      arrows: false,
    };

    return (
      <motion.div
        initial={{ y: 150 }}
        whileInView={{ y: 0 }}
        transition={{ type: "spring", damping: 30 }}
        viewport={{ once: true }}
      >
        <Container maxW={"full"} mb={"60px"}>
          <Stack
            spacing={4}
            as={Container}
            maxW={"3xl"}
            textAlign={"center"}
            pt={"100px"}
            pb={"40px"}
          >
            <Heading fontSize={"3xl"}>ĐỐI TÁC CỦA CHÚNG TÔI</Heading>
            <div className="decorateLineGray">
              <div className="decorateLineOrange"></div>
            </div>
          </Stack>
          <Container maxW={"100%"}>
            {" "}
            <Slider {...settings}>
              {partnerList.map((partner) => (
                <Image
                  objectFit={"scale-down"}
                  key={partner.id}
                  p={2}
                  h={"100px"}
                  w={"full"}
                  src={partner.img}
                  opacity={0.6}
                  _hover={{ opacity: 1 }}
                  transition={"all 0.5s"}
                ></Image>
              ))}
            </Slider>
          </Container>
        </Container>
      </motion.div>
    );
  }
}
