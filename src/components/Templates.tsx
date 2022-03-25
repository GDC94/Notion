import { Image } from "@chakra-ui/image";
import { HStack, Stack, Text } from "@chakra-ui/layout";
import one from '../assets/one.png';
import two from '../assets/two.png';
import three from '../assets/three.png';


export default function Templates() {
  return (
    <HStack borderBottomWidth='.5px' borderBottomColor='#c8c8c8' pb='20' flexDirection={{sm:'column', lg: 'row'}} maxW='1260px' m='0 auto' mt='16' justifyContent='space-between' px={'4'}>
      <Stack>
          <Image w='395px' src={one}/>
          <Text fontWeight="semibold"
          textAlign="left"
          fontSize="16px"
          color="#000000">Company home</Text>
      </Stack>

      <Stack>
          <Image  w='395px'  src={two}/>
          <Text fontWeight="semibold"
          textAlign="left"
          fontSize="16px"
          color="#000000">Roadmap</Text>
      </Stack>

      <Stack>
          <Image  w='395px'  src={three}/>
          <Text fontWeight="semibold"
          textAlign="left"
          fontSize="16px"
          color="#000000">Meeting notes</Text>
      </Stack>
    </HStack>
  );
}
