
import { useEffect } from 'react'
import styled from 'styled-components'
import { Center } from '../conponents/Center'

const Title = styled.h1`
  color: red;
  font-size: 50px;
`

export default function Home() {
  useEffect( () => {
    window.onbeforeunload = () => {
      fetch( 'http://localhost:5000/coming' )
    }

  }, [] )
  return <Center><Title>APSU</Title></Center>
}
