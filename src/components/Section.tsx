import { Image } from "@chakra-ui/image";
import { Stack, Text } from "@chakra-ui/layout";



interface Props {
  image: string;
  title: string;
  description: string;
  cover: string
  w?: string,
  maxWtitle?: string,
  maxWdesc?: string, 
  py?: string
}

export default function Section(props: Props) {
  return (
    <Stack
      maxWidth="1260px"
      m="0 auto"
      px={{ sm: "4",md: "4", lg: 0 }}
      flexDirection={{sm:'column', lg: 'row'}}
      alignItems={{sm: 'center'}}
      py={props.py ? props.py : 'props.py'}
    >
      <Stack w={{sm: '100%', lg:"35%"}} justifyContent="center" alignItems={{sm: 'center', lg:'start'}}>
        <Image w={props.w ? props.w : '100px'} src={props.image} />
        <Text
          textAlign={{sm: 'center', lg: 'start'}}
          lineHeight="39px"
       
          fontSize="30px"
          color="black"
          fontWeight="700"
          maxW={props.maxWtitle ? props.maxWtitle : '240px'}
        >
          {props.title}
        </Text>
        <Text
          fontWeight="semibold"
          textAlign={{sm: 'center', lg: "left"}}
          fontSize="19px"
          color="#00000090"
          pb="3"
          letterSpacing=".1px"
          maxW={props.maxWdesc ? props.maxWdesc : '370px'}
          mt='3'
        >
          {props.description}
        </Text>
      </Stack>
      <Stack w="65%">
        <Image src={props.cover} />
      </Stack>
    </Stack>
  );
}
