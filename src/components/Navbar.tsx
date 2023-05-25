
import {HStack, Image, Text} from "@chakra-ui/react"
import logo from "../assets/react.svg"
import ColorModeSwitch from "./ColorModeSwitch"
const Navbar = () => {

  return (
   <HStack>
    <Image src={logo} boxSize='60px' />
    <Text> logo</Text>
    <ColorModeSwitch />
   </HStack>
  )
}

export default Navbar