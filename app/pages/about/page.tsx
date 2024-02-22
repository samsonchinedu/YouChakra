'use client'

import { Link } from '@chakra-ui/next-js'
import { Code, Stack } from '@chakra-ui/react'
import React from 'react'

const About = () => {
  return (
    <div>  
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut non suscipit natus, autem a atque iure nulla reiciendis, error eum illum eaque ea porro doloremque exercitationem, 
            vero praesentium delectus. Ad!
        </p>
        <Link href='/' color='green.400' _hover={{ color: 'green.500' }}>
            Home page
        </Link>
    </div>
  )
}

export default About


