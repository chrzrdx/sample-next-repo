import NavBar from "../components/NavBar"
import Layout from "../layouts/Layout"

function Content() {
  return (
    <article>
      <blockquote>
        Hello World!
      </blockquote>
    </article>
  )
}


export default function PricingPage() {
  return (
    <Layout navbar={<NavBar />} heading="Pricing Page" content={<Content />} />
  )
}
