'use client'

import { Link } from '@chakra-ui/next-js'

export default function Page() {
  return (
    <Link href='./pages/about' color='green.400' _hover={{ color: 'green.500' }}>
      About
    </Link>
  )
}