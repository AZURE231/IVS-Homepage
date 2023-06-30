import {
  Stack,
  Container,
  Box,
  Heading,
  Text,
  Button,
  VStack,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  SimpleGrid,
  FormErrorMessage,
  useToast,
} from "@chakra-ui/react";
import { MdPhone, MdEmail, MdLocationOn, MdOutlineEmail } from "react-icons/md";
import { BsPerson } from "react-icons/bs";
import { motion } from "framer-motion";
import { useState } from "react";
import { sendContactForm } from "./ContactAPI";

const initValues = {
  name: "",
  email: "",
  message: "",
};

const initState = { isLoading: false, error: "", values: initValues };

export default function Contact() {
  const toast = useToast()
  const [state, setState] = useState(initState);
  const [touched, setTouched] = useState({name:false, email:false, message:false});

  // const [touched, setTouched] = useState(initTouch);

  const { values, isLoading, error } = state;

  const onBlur = ({ target }: any) =>
    setTouched((prev) => ({ ...prev, [target.name]: true }));

  const handleChange = ({ target }: any) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  const handleSubmit = async () => {
    // await fetch('/api/hello1', {
    //   method: 'POST',
    //   body: JSON.stringify(values)
    // })
    setState((prev) => ({
      ...prev,
      isLoading:true,
    }));
    try {
      await sendContactForm(values);
      setTouched({name:false, email:false, message:false});
      setState(initState)
      toast({
        title: "Message sent.",
        status: "success",
        duration: 2000,
        position: "top",
      })
    } catch (error:unknown) {
      setState((prev) => ({
        ...prev,
        isLoading:false,
        
      }));
      if (error instanceof Error) return error.message
        return String(error)
    }
    
  };

  return (
    
    <motion.div
      initial={{ y: 150 }}
      whileInView={{ y: 0 }}
      transition={{ type: "spring", damping: 30 }}
      viewport={{ once: true }}
    >
      {error && (
        toast({
          title: "Failed to send message.",
          status: "error",
          duration: 2000,
          position: "top",
        })
      )}
      <Container backgroundColor={"#f2f2f2"} maxW={"full"}>
        <Stack
          spacing={4}
          as={Container}
          maxW={"3xl"}
          textAlign={"center"}
          pt={"150px"}
        >
          <Heading fontSize={"3xl"}>CONTACT US</Heading>
          <div className="decorateLineGray">
            <div className="decorateLineOrange"></div>
          </div>
          <Text color={"gray.600"} fontSize={"xl"}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque
          </Text>
        </Stack>
        {/* ------------------------- FORM ------------------------------ */}
        <Container bg="#f2f2f2" maxW="full" centerContent overflow="hidden">
          <VStack>
            <Box
              bg="white"
              color="black"
              borderRadius="lg"
              m={{ sm: 4, md: 16, lg: 10 }}
              p={{ sm: 5, md: 5, lg: 5 }}
            >
              <Box p={0}>
                <VStack maxW={"full"}>
                  {/* ------- Thông tin liên hệ -------- */}
                  <WrapItem>
                    <Box as={"form"}>
                      <Box py={{ base: 5, sm: 5, md: 8, lg: 0 }}>
                        <SimpleGrid
                          columns={{ base: 1, md: 2, lg: 3 }}
                          spacing={10}
                        >
                          <Button
                            size="md"
                            height="48px"
                            variant="ghost"
                            color="black"
                            _hover={{ border: "2px solid black" }}
                            leftIcon={<MdPhone color="black" size="20px" />}
                          >
                            +91-988888888
                          </Button>
                          <Button
                            size="md"
                            height="48px"
                            variant="ghost"
                            color="black"
                            _hover={{ border: "2px solid black" }}
                            leftIcon={<MdEmail color="black" size="20px" />}
                          >
                            hello@abc.com
                          </Button>
                          <Button
                            size="md"
                            height="48px"
                            variant="ghost"
                            color="black"
                            _hover={{ border: "2px solid black" }}
                            leftIcon={
                              <MdLocationOn color="black" size="20px" />
                            }
                          >
                            Karnavati, India
                          </Button>
                        </SimpleGrid>
                      </Box>
                    </Box>
                  </WrapItem>
                  {/* ---------------- Form ------------ */}
                  <WrapItem width={"full"}>
                    <Box bg="white" borderRadius="lg" width={"full"}>
                      <Box m={8} color="#0B0E3F">
                        <VStack spacing={5}>
                          <FormControl
                            id="name"
                            isRequired
                            isInvalid={touched.name && !values.name}
                          >
                            <FormLabel>Your Name</FormLabel>
                            <InputGroup borderColor="#E0E1E7">
                              <InputLeftElement pointerEvents="none">
                                <BsPerson color="gray.800" />
                              </InputLeftElement>
                              <Input
                                type="text"
                                size="md"
                                name="name"
                                value={values.name}
                                onChange={handleChange}
                                errorBorderColor="red.300"
                                onBlur={onBlur}
                              />
                            </InputGroup>
                            <FormErrorMessage>Required</FormErrorMessage>
                          </FormControl>
                          <FormControl
                            id="name"
                            isRequired
                            isInvalid={touched.email && !values.email}
                          >
                            <FormLabel>Mail</FormLabel>
                            <InputGroup borderColor="#E0E1E7">
                              <InputLeftElement pointerEvents="none">
                                <MdOutlineEmail color="gray.800" />
                              </InputLeftElement>
                              <Input
                                type="text"
                                size="md"
                                name="email"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={onBlur}
                                errorBorderColor="red.300"
                              />
                            </InputGroup>
                            <FormErrorMessage>Required</FormErrorMessage>
                          </FormControl>
                          <FormControl
                            id="name"
                            isRequired
                            isInvalid={touched.message && !values.message}
                          >
                            <FormLabel>Message</FormLabel>
                            <Textarea
                              borderColor="gray.300"
                              _hover={{
                                borderRadius: "gray.300",
                              }}
                              placeholder="message"
                              name="message"
                              value={values.message}
                              onChange={handleChange}
                              onBlur={onBlur}
                              errorBorderColor="red.300"
                            />
                            <FormErrorMessage>Required</FormErrorMessage>
                          </FormControl>
                          <FormControl id="name" float="right">
                            <Button
                              variant="solid"
                              bg="orange"
                              color="white"
                              _hover={{ bg: "green" }}
                              onClick={handleSubmit}
                              isLoading={isLoading}
                              isDisabled={!values.name || !values.email || !values.message}
                            >
                              Send Message
                            </Button>
                          </FormControl>
                        </VStack>
                      </Box>
                    </Box>
                  </WrapItem>
                </VStack>
              </Box>
            </Box>
          </VStack>
        </Container>
      </Container>
    </motion.div>
  );
}
