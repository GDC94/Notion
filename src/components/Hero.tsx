import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Badge, Grid, Stack, Text, VStack } from "@chakra-ui/layout";
import homeimage from "../assets/home-page-hero-refreshed-v3.png";

import headspace from "../assets/headspace-logo.png";
import match from "../assets/match-v2.png";
import mix from "../assets/mixpanel.png";
import figma from "../assets/figma.png";
import branch from "../assets/branch (1).png";


export default function Hero() {
  return (
    <Stack
      maxWidth="1260px"
      m="0 auto"
      px={{ md: "4", lg: 0 }}
      flexDirection={{sm: 'column-reverse', lg:'row'}}
      alignItems={{sm: 'center'}}
      
      h={{sm: 'auto', lg: '75vh'}}
      mt='14'
    >
      <VStack alignItems={{sm: 'center', lg: "flex-start"}} w={{sm: '60%' ,lg: '50%'}} justifyContent="center" pt='12' textAlign='center'>
        <Text lineHeight={{sm: '40px', lg: "72px"}} fontSize={{sm: "40px", lg: "76px"}} color="black" fontWeight="bold" textAlign={{sm:'center',lg:'start'}}>
          One workspace. <br></br> Every team.{" "}
        </Text>
        <Text
          pt="2"
          fontWeight="semibold"
          textAlign={{sm: 'center', lg: 'left'}}
          fontSize="19px"
          color="#00000090"
          pb="3"
          letterSpacing=".1px"

        >
          We’re more than a doc. Or a table. Customize <br></br> Notion to work
          the way you do.
        </Text>

        <Button
          fontSize={"14px"}
          fontWeight={"bold"}
          color={"#ffffff"}
          size="sm"
          borderWidth="1px"
          borderColor="#d8564c"
          _hover={{
            bg: "#c85b53",
          }}
          bg="#e16259"
          paddingLeft="29px"
          paddingRight="29px"
          minH="36px"
          paddingBottom="10px"
          paddingTop="10px"
          borderRadius="4px"
        >
          Try Notion free
        </Button>

        <Stack py="7" w="max-content">
          <Badge p='0' fontWeight="medium" w="max-content" color="#0000009e">
            TRUSTED BY TEAMS AT
          </Badge>
          <Grid py="1" templateColumns="repeat(5, 1fr)" display='flex' alignItems='center' gap="2">
          <Image __css={{filter: 'grayscale(1)'}} w="50px" mr='2' src={branch} />
         

            <Image __css={{filter: 'grayscale(1)'}} w="80px" p='1.5' mr='2' src={mix} />

            <Image __css={{filter: 'grayscale(1)'}} w="60px" mr='2' src={figma} />

            <Image __css={{filter: 'grayscale(1)'}} w="90px" mr='2' src={match} />

            <Image __css={{filter: 'grayscale(1)'}} w="90px" mr='2' src={headspace} />
          </Grid>
        </Stack>
      </VStack>
      <Stack w="50%" justifyContent="center" alignItems="center">
        <Image w="500px" src={homeimage} pb={{sm: '0', lg: '3.5'}} pt={{sm: '10', lg: '0'}}/>
      </Stack>
    </Stack>
  );
}
