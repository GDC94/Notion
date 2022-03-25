import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Heading, Link, Stack, Text } from "@chakra-ui/layout";
import logo from "../assets/notion-app-icon-3d.png";
import women from "../assets/sitting-character.png";
export default function Contact() {
  return (
    <Stack
      pos="relative"
      lineHeight="22px"
      h="700px"
      maxW="1100px"
      m="0 auto"
      justifyContent="center"
      alignItems="center"
    >
      <Image width="80px" src={logo} />
      <Heading fontWeight="bold" color="black">
        Try Notion today
      </Heading>
      <Text fontWeight="medium" fontSize="19px" color="#585858">
        Get started for free.
      </Text>
      <Text pb="5" fontWeight="medium" fontSize="19px" color="#585858">
        Add your whole team as your needs grow.
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
        paddingLeft="69px"
        paddingRight="69px"
        minH="36px"
        paddingBottom="10px"
        paddingTop="10px"
        borderRadius="4px"
      >
        Try Notion free
      </Button>
      <Text fontWeight="medium" fontSize="17px" color="#757575">
        On a big team?{" "}
        <Link textDecoration='underline' _hover={{ color: "red", textDecoration: "none" }}>
          Contact sales
        </Link>
      </Text>

      <Image pos="absolute" w={{sm: '200px', lg: '250px'}} src={women} bottom="0" left={{sm:'13%', lg: '0'}} />
    </Stack>
  );
}
