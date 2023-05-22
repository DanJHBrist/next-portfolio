//Import the Link API to support client-side navigation
import Link from 'next/link'
import Header from '../components/Header'
import Layout from '../components/MyLayout'

const linkStyle = {
  marginRight: 15
}

export default () => (
  <Layout>
    <h1>About me:</h1>
    <p>I've been with HyperionDev for the past year or so, having completed the Software Engineering bootcamp,<br></br>
      and am in the process of completing the Web Development bootcamp.
    </p>
    <style global jsx>{`
        div {
          color: #00308F;
          background-color: red
        }
      `}</style>
  </Layout>
  
)