//Import the Link API to support client-side navigation
import Link from 'next/link'
import Layout from '../components/MyLayout'
import Header from '../components/Header'
import Image from 'react-bootstrap/Image'

export default () => (
	<Layout>
	    <h1>Hi, I'm Daniel Bristow, a trainee Web Developer and Software<br></br> Engineer, 
			and this is my portfolio so far.</h1>
	    <Image src="/static/images/ITPic.jpg/" thumbnail />
  	</Layout>
)