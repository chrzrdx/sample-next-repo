import NavBar from "../components/NavBar"
import Layout from "../layouts/Layout"

export default function AboutPage() {
  return (
    <Layout
      navbar={<NavBar />}
      heading="About Us"
      content={
        <article>
          <ul>
            <li>Lorem ipsum.</li>
            <li>Lorem ipsum.</li>
            <li>Lorem ipsum.</li>
          </ul>
        </article>
      }
    />
  )
}
