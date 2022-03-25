import { Image } from "@chakra-ui/image";
import { Stack, Text, VStack } from "@chakra-ui/layout";
import React from "react";
import dash4 from '../assets/dash-4.png';

export default function Options() {
  return (
    <Stack flexDirection={{sm: 'column-reverse', lg: 'row' }}maxW='1260px' m='0 auto' py='16' pb='32' borderBottomWidth='.5px' borderBottomColor='#00000078' px={'10'} >
      <VStack alignItems='left' w='35%' lineHeight='20px'>
        <Text  fontWeight="semibold"
          textAlign="left"
          fontSize="18px"
          color="#000000"
          transition='.2s'
          _hover={{bg: "#55555511"}}
          pt='1'
          pb='1'
          pl='2'
          pr='2'
          w='max-content'
          borderRadius='4px'
          maxH='min-content'
          mt='2'
          
 
       
          >Company home</Text>
        <Text  fontWeight="semibold"
          textAlign="left"
          fontSize="18px"
          color="#000000"
          _hover={{bg: "#55555511"}}
          pt='1'
          pb='1'
          pl='2'
          pr='2'
          w='max-content'
          borderRadius='4px'
          transition='.2s'

   
        >Roadmap</Text>
        <Text  fontWeight="semibold"
          textAlign="left"
          fontSize="18px"
          color="#000000"
          _hover={{bg: "#55555511"}}
          pt='1'
          pb='1'
          pl='2'
          pr='2'
          w='max-content'
          borderRadius='4px'
          transition='.2s'
          

        >Design docs</Text>
        <Text  fontWeight="semibold"
          textAlign="left"
          fontSize="18px"
          color="#000000"
          _hover={{bg: "#55555511"}}
          pt='1'
          pb='1'
          pl='2'
          pr='2'
          w='max-content'
          borderRadius='4px'
          transition='.2s'

         >Engineering wiki</Text>
        <Text  fontWeight="semibold"
          textAlign="left"
          fontSize="18px"
          color="#000000"
          _hover={{bg: "#55555511"}}
          pt='1'
          pb='1'
          pl='2'
          pr='2'
          w='max-content'
          borderRadius='4px'
          transition='.2s'
         
         >Meeting notes</Text>
        <Text  fontWeight="semibold"
          textAlign="left"
          fontSize="18px"
          color="#000000"
          _hover={{bg: "#55555511"}}
          pt='1'
          pb='1'
          pl='2'
          pr='2'
          w='max-content'
          borderRadius='4px'

          transition='.2s'
        >Website publishing</Text>
      </VStack>
      <Stack w={{sm: '100%', lg: '95%'}} alignItems={{sm: 'center', lg: 'start'}}>
          <Image w='full' src={dash4}/>
      </Stack>
    </Stack>
  );
}
