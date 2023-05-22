//Import the Link API to support client-side navigation
import Link from 'next/link'
import Layout from '../components/MyLayout'
import Header from '../components/Header'
import Image from 'react-bootstrap/Image'
import { Analytics } from '@vercel/analytics/react';

export default () => (
	<Layout>
	    <h1>Hi, I'm Daniel Bristow, a trainee Web Developer and Software<br></br> Engineer, 
			and this is my portfolio so far.</h1>
	    <Image src="/static/images/ITPic.jpg/" thumbnail />
		{/* <!-- Google tag (gtag.js) --> */}
<script async src="https://www.googletagmanager.com/gtag/js?id=G-QYW7XHJFRN"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments)}
  gtag('js', new Date());

  gtag('config', 'G-QYW7XHJFRN');
</script>
<Analytics /> 
  	</Layout>
)