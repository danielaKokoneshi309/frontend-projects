
import { HStack, Text,Switch,useColorMode } from '@chakra-ui/react'

const ColorModeSwitch = () => {
    const {toggleColorMode,colorMode}=useColorMode();

  return (
    <HStack>
        <Switch isChecked={colorMode==='dark'} onChange={toggleColorMode}/>
<Text whiteSpace='nowrap'>
  DarkMode
</Text>
    </HStack>
  )
}

export default ColorModeSwitch