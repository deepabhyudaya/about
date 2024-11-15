import FlickeringGrid from '@/components/ui/flickering-grid';
import React from 'react';
import Globe from '@/components/ui/globe';
import CodeComparison from '@/components/ui/code-comparison';

const beforeCode = `const Abhyudaya = async (req: Request) => {
  let aboutMe = await req.headers.get('about');
  const nationality = aboutMe['nation'];
  // Indian
  const bio = aboutMe['bio'];
  // A person who likes to code and coffee
};
`;

const afterCode = `import { createMiddleware, type MiddlewareFunctionProps } from '@app/(auth)/auth/_middleware';
import { auth } from '@app/(auth)/auth/_middleware';
import { team } from '@app/(team)/team/_middleware';
 
const middlewares = {
  '/auth{/:path?}': auth,
  '/team{/:slug?}': [ auth, team ],
};
 
export const middleware = createMiddleware(middlewares);
 
export const config = {
  matcher: ['/((?!_next/|_static|_vercel|[\\w-]+\\.\\w+).*)'],
};`;

function Page() {
  return (
    <main className="flex flex-col items-center justify-center">
      <div className=" h-auto w-full min-h-screen flex items-center justify-center flex-col">
        <div className="relative h-[500px] rounded-lg w-full bg-background overflow-hidden border">
          <FlickeringGrid
            className="z-0 absolute inset-0 size-full"
            squareSize={4}
            gridGap={6}
            color="#6B7280"
            maxOpacity={0.5}
            flickerChance={0.1}
            height={800}
            width={800}
          />
          <div className=" h-full w-full flex flex-col space-y-3 items-center justify-center p-6">
            {/* <h1 className=" text-2xl text-white  font-extrabold">
              Abhyudaya Deep Verma
            </h1>
            <h1 className=" text-md text-white/60  font-extrabold">
              I like to code (a lot actually).
            </h1> */}
            <CodeComparison
              beforeCode={beforeCode}
              afterCode={afterCode}
              language="typescript"
              filename="aboutMe.ts"
              lightTheme="github-light"
              darkTheme="github-dark"
            />
          </div>
        </div>
      </div>
      <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg border bg-background px-40 pb-40 pt-8 md:pb-60 md:shadow-xl">
        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-4xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
          I build <br />
          Webapps with <br />
          Speed everywhere
        </span>
        <Globe className="top-64" />
        <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
      </div>
    </main>
  );
}

export default Page;
