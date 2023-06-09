import { ReactElement } from 'react';
import { Box, SimpleGrid, Icon, Text, Stack, Flex } from '@chakra-ui/react';
import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc';

interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
  bg: string;
}

const Feature = ({ title, text, icon, bg }: FeatureProps) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'black'}
        mb={1}>
        {icon}
      </Flex>
      <Text fontWeight={600} color={'white'}>{title}</Text>
      <Text color={'white'}>{text}</Text>
    </Stack>
  );
};

export default function Products() {
  return (
    <Box p={10} pl={200} pr={200} bg='black'>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature
          icon={<Icon as={FcAssistant} w={10} h={10} />}
          title={'Tư vấn giải pháp'}
          text={
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
          }
          bg='black'
        />
        <Feature
          icon={<Icon as={FcDonate} w={10} h={10} />}
          title={'Giải pháp nhân sự'}
          text={
            'Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata'
          }
          bg='grey.80'
        />
        <Feature
          icon={<Icon as={FcInTransit} w={10} h={10} />}
          title={'Xây dựng phần mềm'}
          text={
            'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur'
          }
          bg='black'
        />
      </SimpleGrid>
    </Box>
  );
}