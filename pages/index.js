import NextLogo from '../public/nextjs.svg';

export default function Home() {
  return (
    <div className="p-4 mx-auto flex items-center">
      <NextLogo className="mr-4" width="100px" height="100px" />
      <span>Boilerplate</span>
    </div>
  );
}
