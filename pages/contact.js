import Layout from '../components/MyLayout'
import Image from 'react-bootstrap/Image'
import { Analytics } from '@vercel/analytics/react';
import Head from 'next/head'

export default () => (
  <div>
    <Layout>
      <h1>Contact me at:</h1>
      <Image src="../static/images/emailInsignia.jpg/" thumbnail />
      <h6> danbrist@gmail.com </h6>
      <style global jsx>{`
        div {
          color: #00308F;
          background-color: yellow
        }
      `}</style>
      <Analytics /> 
    </Layout>
  </div>
)