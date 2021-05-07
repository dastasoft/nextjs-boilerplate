import NextLogo from "../public/nextjs.svg"

export default function Home() {
  return (
    <div className="flex justify-center items-center p-4">
      <NextLogo className="mr-4" width="100px" height="100px" />
      <span className="text-2xl">Boilerplate</span>
    </div>
  )
}
