import Link from 'next/link'
import Layout from '../components/MyLayout'

const linkStyle = {
  marginRight: 15
}

export default () => (
  <Layout>
    <h1>My Projects:</h1>
    <p>My Github with assorted projects can be found <Link href="https://github.com/DanJHBrist" style={linkStyle}>here!</Link></p>
    <style global jsx>{`
        h1 {
          color: #00308F;
          background-color: red
        }
        p {
          color: #00308F;
          background-color: yellow
        }
      `}</style>
  </Layout>
)