import { NextComponentType } from 'next'
import React from 'react'
import styled from 'styled-components'

interface CenterProps {

}
const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
export const Center: NextComponentType<CenterProps> = ( { children } ) => {
  return (
    <Content>{children}</Content>
  )
}