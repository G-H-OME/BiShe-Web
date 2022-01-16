import  {AppProps}  from 'next/app'
import React from 'react'



const MyApp = ( { Component, pageProps, router }: AppProps ) => {
  return (
    <Component {...pageProps} />
  )
}

export default MyApp