export default function Layout({ heading, navbar, content }) {
  return (
    <>
      {navbar}
      <main>
        <h1>{heading}</h1>
        {content}
      </main>
    </>
  )
}
