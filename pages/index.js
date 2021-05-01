import NavBar from "../components/NavBar"
import Layout from "../layouts/Layout"

function Content() {
  return (
    <article>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos repellat
        facilis repellendus aut molestias quam consequatur totam. Illo,
        laudantium est libero recusandae ipsam harum laborum dolorum
        perferendis. Dolorum nam molestias voluptatibus consequuntur voluptates
        eaque neque ducimus. Minus corrupti quo eos rerum facilis animi dolor
        laboriosam itaque non? Quis, fuga ab?
      </p>
    </article>
  )
}

export default function IndexPage() {
  return (
    <Layout navbar={<NavBar />} heading="Home Page" content={<Content />} />
  )
}
