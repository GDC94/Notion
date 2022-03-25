import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Image,
  useDisclosure,

} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from "@chakra-ui/icons";

import { RiArrowDropDownLine } from "react-icons/ri";
import logo from "../assets/svg+xml;base64,PHN2ZyB3aWR0aD0iODciIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCA4NyAzMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMS44MDUgMS4yOTRsMTYuNi0xLjIyNmMyLjAzOS0uMTc1IDIuNTYzLS4wNTcgMy44NDUuODc1bDUuMjk5IDMuN.svg";
import { LinkButton } from "./LinkButton";

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box
      position={"fixed"}
      top={"0"}
   
      w="full"
      zIndex={"100"}
    >
      <Flex
        maxW="1260px"
        h="60px"
        m="0 auto"
        bg={"white"}
        color={"black"}
        minH={"60px"}
        alignItems="center"
        align={"center"}
        borderWidth="1px"
        borderBottomColor="#00000018"
        px={{ base: 4, sm: "4", lg: "0" }}
        pt={"3"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex
          flex={{ base: 1 }}
          justify={{ base: "center", md: "start" }}
          alignItems="center"
        >
          <Image mb="0.9" src={logo} />
          <Flex display={{ base: "none", md: "flex" }} ml={6}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={3}
          alignItems="center"
        >
          <Button
            display={{ base: "none", md: "inline-flex" }}
            fontSize={"15px"}
            fontWeight={"bold"}
            color={"#000000"}
            size="sm"
            borderWidth="1px"
            _hover={{
              bg: "#f1f1f1",
            }}
            paddingLeft="11px"
            paddingRight="11px"
            minH="30px"
            paddingBottom="5px"
            paddingTop="5px"
            borderRadius="4px"
          >
            <LinkButton href={"https://www.notion.so/contact-sales"}>Contact sales</LinkButton>
          </Button>
       
          <Button
            display={{ base: "none", md: "inline-flex" }}
            fontSize={"15px"}
            fontWeight={"bold"}
            color={"#000000"}
            size="sm"
            borderWidth="1px"
            _hover={{
              bg: "#f1f1f1",
            }}
            paddingLeft="11px"
            paddingRight="11px"
            minH="30px"
            paddingBottom="5px"
            paddingTop="5px"
            borderRadius="4px"
          >
            <LinkButton href={"https://www.notion.so/login"}>Log in</LinkButton>
          </Button>

          <Button
            display={{ base: "none", md: "inline-flex" }}
            fontSize={"14px"}
            fontWeight={"bold"}
            color={"#ffffff"}
            size="sm"
            borderWidth="1px"
            borderColor="#d44237"
            _hover={{
              bg: "#c85b53",
            }}
            bg="#e16259"
            paddingLeft="11px"
            paddingRight="11px"
            minH="36px"
            paddingBottom="10px"
            paddingTop="10px"
            borderRadius="4px"
          >
            <LinkButton href={"https://www.notion.so/signup"}>
              Try Notion free
            </LinkButton>
          </Button>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = "#111111";
  const linkHoverColor = "#000000";
  const popoverContentBgColor = "white";

  return (
    <Stack direction={"row"}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Box
                as="a"
                href={navItem.href ?? "#"}
                p=".6"
                pt="0"
                fontWeight={"600"}
                rounded="3px"
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                  bg: "#f6f5f5",
                }}
                display="flex"
                alignItems="center"
              >
                <Button
                  p="0"
                  rounded="2px"
                  color={linkColor}
                  fontWeight={"semibold"}
                  fontSize={"15.4px"}
                  bg="transparent"
                  pl="1"
                >
                  {navItem.label}
                </Button>
                <RiArrowDropDownLine size="20px" />
              </Box>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                rounded="4px"
                borderWidth=".5px"
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={1}
                borderColor="gray.300"
                w="260px"
                mt="0"
                lineHeight="16px"
                fontSize="14px"
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={1}
      rounded={"sm"}
      _hover={{ bg: "#f6f6f6" }}
    >
      <Stack direction={"row"} align={"center"} w="250px">
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "black" }}
            fontWeight={700}
          >
            {label}
          </Text>
          <Text
            fontSize={"15px"}
            mt="0"
            letterSpacing="0"
            lineHeight="17px"
            fontWeight="semibold"
            color="#666666"
          >
            {subLabel}
          </Text>
        </Box>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack bg={"gray.800"} p={4} display={{ md: "none" }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text fontWeight={600} color={"#111111"}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={"gray.700"}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Product",
    children: [
      {
        label: "Home",
        subLabel: "Docs, projects, & wikis",
        href: "#",
      },
      {
        label: "Template gallery",
        subLabel: "Setups to get you started",
        href: "#",
      },
      {
        label: "Customer stories",
        subLabel: "See how teams use Notion",
        href: "#",
      },
      {
        label: "Integrations",
        subLabel: "Connect your tools to Notion",
        href: "#",
      },
      {
        label: "",
        subLabel: "Mac, Windows, IOS & Android",
        href: "#",
      },
    ],
  },
  {
    label: "Download",
    children: [
      {
        label: "iOS & Android",
      },
      {
        label: "Mac & Windows",
      },
      {
        label: "Web Clipper",
      },
    ],
  },
  {
    label: "Solutions",
    children: [
      {
        label: "iOS & Android",
        subLabel: "",
        href: "#",
      },
      {
        label: "Freelance Projects",
        subLabel: "An exclusive list for contract work",
        href: "#",
      },
    ],
  },
  {
    label: "Resources",
    children: [
      {
        label: "Blog",
        subLabel: "",
        href: "#",
      },
      {
        label: "Guides & tutorials",
        subLabel: "",
        href: "#",
      },
      {
        label: "Webinars",
        subLabel: "",
        href: "#",
      },
      {
        label: "Help center",
        subLabel: "",
        href: "#",
      },
      {
        label: "API Docs",
        subLabel: "",
        href: "#",
      },
    ],
  },
  {
    label: "Pricing",
    href: "#",
  },
];
