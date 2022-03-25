import { Image } from "@chakra-ui/image";
import { Grid, ListItem, Stack, UnorderedList } from "@chakra-ui/layout";
import logo from "../assets/svg+xml;base64,PHN2ZyB3aWR0aD0iODciIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCA4NyAzMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMS44MDUgMS4yOTRsMTYuNi0xLjIyNmMyLjAzOS0uMTc1IDIuNTYzLS4wNTcgMy44NDUuODc1bDUuMjk5IDMuN.svg";

export default function Footer() {
  return (
    <Stack maxW="1260px" m="0 auto" my='2'  py='16' borderBottomWidth='.5px' borderTopWidth='.5px' borderColor='#a7a7a7' px={'4'}>
      <Grid templateColumns={{sm: "repeat(3, 1fr)",lg:"repeat(6, 1fr)"}} >
        <Stack>
          <Image w="90px" src={logo} />
        </Stack>
        <Stack>
          <UnorderedList lineHeight='25px'>
            <ListItem
              fontWeight="bold"
              listStyleType="none"
              color="black"
              fontSize="15px"
            >
              Product
            </ListItem>
            <ListItem listStyleType="none" fontSize='15px' color="#686868">
              Overview
            </ListItem>

            <ListItem listStyleType="none" fontSize='15px' color="#686868">
              Pricing
            </ListItem>
            <ListItem listStyleType="none" fontSize='15px' color="#686868">
              Customer stories
            </ListItem>
            <ListItem listStyleType="none" fontSize='15px' color="#686868">
              Integrations
            </ListItem>
            <ListItem listStyleType="none" fontSize='15px' color="#686868">
              Desktop apps
            </ListItem>
            <ListItem listStyleType="none" fontSize='15px' color="#686868">
              Mobile apps
            </ListItem>
            <ListItem listStyleType="none" fontSize='15px' color="#686868">
              Security
            </ListItem>
            <ListItem listStyleType="none" fontSize='15px' color="#686868">
              Terms & privacy
            </ListItem>
          </UnorderedList>
        </Stack>
        <Stack>
          <UnorderedList lineHeight='25px'>
            <ListItem
              fontWeight="bold"
              listStyleType="none"
              color="black"
              fontSize="15px"
            >
              {" "}
             Notion for
            </ListItem>
            <ListItem fontSize='15px' color="#686868" listStyleType="none" >
              Enterprise
            </ListItem>
            <ListItem listStyleType="none"fontSize='15px' color="#686868">
              Small business
            </ListItem>

            <ListItem listStyleType="none" fontSize='15px' color="#686868">
              Personal use
            </ListItem>
            <ListItem listStyleType="none"fontSize='15px' color="#686868">
              Remote work
            </ListItem>
            <ListItem listStyleType="none" fontSize='15px' color="#686868">
              Startups
            </ListItem>
            <ListItem listStyleType="none" fontSize='15px' color="#686868">
              Education
            </ListItem>
            <ListItem listStyleType="none" fontSize='15px' color="#686868">
              Engineering
            </ListItem>
            <ListItem listStyleType="none" fontSize='15px' color="#686868">
              Product
            </ListItem>
            <ListItem listStyleType="none" fontSize='15px' color="#686868">
              Design
            </ListItem>
            <ListItem listStyleType="none" fontSize='15px' color="#686868">
              Managers
            </ListItem>
          </UnorderedList>
        </Stack>
        <Stack>
          <UnorderedList lineHeight='25px'>
            <ListItem
              fontWeight="bold"
              listStyleType="none"
              color="black"
              fontSize="15px"
            >
              {" "}
              Resources
            </ListItem>
            <ListItem listStyleType="none" fontSize='15px' color="#686868">
            Blog
            </ListItem>
            <ListItem listStyleType="none" fontSize='15px' color="#686868">
              Guides & tutorials
            </ListItem>

            <ListItem listStyleType="none" fontSize='15px' color="#686868">
              Help center
            </ListItem>
            <ListItem listStyleType="none" fontSize='15px' color="#686868">
              Webinars
            </ListItem>
            <ListItem listStyleType="none" fontSize='15px' color="#686868">
              Template gallery
            </ListItem>
            <ListItem listStyleType="none" fontSize='15px' color="#686868">
              Community
            </ListItem>
            <ListItem listStyleType="none" fontSize='15px' color="#686868">
              What’s new
            </ListItem>
            <ListItem listStyleType="none" fontSize='15px' color="#686868">
              Find a consultant
            </ListItem>
            <ListItem listStyleType="none" fontSize='15px' color="#686868">
              API docs
            </ListItem>
            <ListItem listStyleType="none"fontSize='15px' color="#686868">
              Switch from Evernote
            </ListItem>
            <ListItem listStyleType="none" fontSize='15px' color="#686868">
              Switch from Confluence
            </ListItem>
          </UnorderedList>
        </Stack>
        <Stack>
          <UnorderedList lineHeight='25px'>
            <ListItem
              fontWeight="bold"
              listStyleType="none"
              color="black"
              fontSize="15px"
            >
              Templates
            </ListItem>
            <ListItem listStyleType="none" fontSize='15px' color="#686868">
            Company home
            </ListItem>

            <ListItem listStyleType="none" fontSize='15px' color="#686868">
            Meeting notes
            </ListItem>
            <ListItem listStyleType="none" fontSize='15px' color="#686868">
            To-dos
            </ListItem>
            <ListItem listStyleType="none" fontSize='15px' color="#686868">
            Weekly agenda
            </ListItem>
            <ListItem listStyleType="none" fontSize='15px' color="#686868">
            Docs
            </ListItem>
            <ListItem listStyleType="none" fontSize='15px' color="#686868">
            Roadmap
            </ListItem>
            <ListItem listStyleType="none" fontSize='15px' color="#686868">
            Design system
            </ListItem>
            <ListItem listStyleType="none" fontSize='15px' color="#686868">
            New hire onboarding
            </ListItem>
            <ListItem listStyleType="none" fontSize='15px' color="#686868">
            Product wiki
            </ListItem>
            <ListItem listStyleType="none" fontSize='15px' color="#686868">
            Content calendar
            </ListItem>
          </UnorderedList>

        </Stack>
        <Stack>
          <UnorderedList lineHeight='25px'>
            <ListItem
              fontWeight="bold"
              listStyleType="none"
              color="black"
              fontSize="15px"
            >
             Company
            </ListItem>
            <ListItem listStyleType="none" fontSize='15px' color="#686868">
            About us
            </ListItem>

            <ListItem listStyleType="none" fontSize='15px' color="#686868">
            Careers
            </ListItem>
            <ListItem listStyleType="none" fontSize='15px' color="#686868">
            Media kit
            </ListItem>
            <ListItem listStyleType="none" fontSize='15px' color="#686868">
            Contact sales
            </ListItem>
            <ListItem listStyleType="none" fontSize='15px' color="#686868">
            Contact support
            </ListItem>
            <ListItem listStyleType="none" fontSize='15px' color="#686868">
            Email us
            </ListItem>
           
          </UnorderedList>
        </Stack>
      </Grid>
    </Stack>
  );
}
