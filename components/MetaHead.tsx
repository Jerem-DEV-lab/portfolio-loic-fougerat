import React from 'react'
import Head from 'next/head'

export interface MetaHeadParams {
    title: string,
    description?: string,

}
const MetaHead = ({title, description}: MetaHeadParams) => {
  return <Head>
  <title>{title} 📸</title>
  <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
  {description ? <meta name='description' content={description} /> : null}
</Head>
}

export default MetaHead