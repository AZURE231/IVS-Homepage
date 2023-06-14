import { ReactElement } from "react";
import { Box, SimpleGrid, Icon, Text, Stack, Flex } from "@chakra-ui/react";
import { FcAssistant, FcDonate, FcInTransit } from "react-icons/fc";

interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
  bg: string;
}

const featuresList = [
  {
    id: 0,
    icon: FcAssistant,
    title: "Tư vấn giải pháp",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...",
    bgColor: "linear(black)",
  },
  {
    id: 1,
    icon: FcDonate,
    title: "Giải pháp nhân sự",
    text: "Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata",
    bgColor: "linear(black, #2e2e2e, black)",
  },
  {
    id: 2,
    icon: FcInTransit,
    title: "Xây dựng phần mềm",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
    bgColor: "linear(black)",
  },
];

const Feature = ({ title, text, icon, bg }: FeatureProps) => {
  return (
    <Stack height={"full"} p={5} bgGradient={bg}>
      <Flex
        w={16}
        h={16}
        align={"center"}
        justify={"center"}
        color={"white"}
        rounded={"full"}
        mb={1}
      >
        {icon}
      </Flex>
      <Text fontWeight={600} color={"white"}>
        {title}
      </Text>
      <Text color={"white"}>{text}</Text>
    </Stack>
  );
};

export default function Products() {
  return (
    <Box pl={150} pr={150} bg="black">
      <SimpleGrid columns={{ base: 1, md: 3 }}>
        {featuresList.map((feature) => (
          <Feature
            icon={<Icon as={feature.icon} w={10} h={10} />}
            title={feature.title}
            text={feature.text}
            bg={feature.bgColor}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
}
