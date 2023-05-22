import Layout from '../components/MyLayout'
import Image from 'react-bootstrap/Image'
import { Analytics } from '@vercel/analytics/react';

export default () => (
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
    {/* <!-- Google tag (gtag.js) --> */}
<script async src="https://www.googletagmanager.com/gtag/js?id=G-QYW7XHJFRN"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments)}
  gtag('js', new Date());

  gtag('config', 'G-QYW7XHJFRN');
</script> 
  </Layout>
  
)