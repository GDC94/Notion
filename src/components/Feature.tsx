import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { HStack, Stack, Text } from "@chakra-ui/layout";





interface Props {
  text: string,
  description?: string,
  bg: string,
  bgHover: string,
  textButton: string,
  img: string
  bgBorder: string,
  wtitle: string,
  wdesc: string,
  color?: string,
  wImg? :string
}


export default function Feature(props: Props) {
  return (
    <Stack maxW='1260px' m='0 auto' flexDirection={{sm: 'column', lg: 'row'}} pt='32' px={{sm: '4'}} >
      <Stack flexDirection='column'  textAlign={{sm: 'center', lg: "left"}} w={{sm: '100%', lg: '67%'}} alignItems={{sm:'center', lg: 'inherit'}}>
        <Text
          textAlign={{sm: 'center', lg: 'start'}}
          lineHeight="39px"
          fontSize="35px"
          color="black"
          fontWeight="700"
          maxW={props.wtitle}
        >
          {props.text}
        </Text>
        <Text
          fontWeight="semibold"
          textAlign={{sm: 'center', lg: "left"}}
          fontSize="19px"
          color="#00000090"
          pb="3"
          letterSpacing=".1px"
          mt='3'
          maxW={props.wdesc}
        >
          {props.description ? props.description : ''}
        </Text>
        <Button
          fontSize={"14px"}
          fontWeight={"bold"}
          color={props.color ? props.color : 'white'}
          size="sm"
          borderWidth="1px"
          borderColor={props.bgBorder}
          _hover={{
            bg: props.bgHover
          }}
          bg={props.bg}
          paddingLeft="11px"
          paddingRight="11px"
          minH="36px"
          paddingBottom="10px"
          paddingTop="10px"
          borderRadius="4px"
          w='max-content'
        >
         {props.textButton}
        </Button>
      </Stack>
      <Stack display='flex' justifyContent='center' alignItems='center'>
          <Image w={props.wImg ? props.wImg : '250px'} src={props.img}/>
      </Stack>



    </Stack>
  );
}
