import { Code, Stack } from '@chakra-ui/react'
import React from 'react'

const About = () => {
  return (
    <div>  
        <Code>Hello world</Code> 
        <Stack direction='row'>
            <Code children='console.log(welcome)' />
            <Code colorScheme='red' children="var chakra = 'awesome!'" />
            <Code colorScheme='yellow' children='npm install chakra' />
        </Stack>
    </div>
  )
}

export default About


