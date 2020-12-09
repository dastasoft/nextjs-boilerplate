import NextLogo from "../public/nextjs.svg"
import { connectToDatabase } from "../util/mongodb"

export default function Home({ isConnected }) {
  return (
    <div className="flex justify-center items-center p-4">
      <NextLogo className="mr-4" width="100px" height="100px" />
      <span className="text-2xl">Boilerplate</span>
      {isConnected ? (
        <h2 className="subtitle">You are connected to MongoDB</h2>
      ) : (
        <h2 className="subtitle">
          You are NOT connected to MongoDB. Check the <code>README.md</code> for
          instructions.
        </h2>
      )}
    </div>
  )
}
export async function getServerSideProps(context) {
  const { client } = await connectToDatabase()

  const isConnected = await client.isConnected() // Returns true or false

  return {
    props: { isConnected },
  }
}
