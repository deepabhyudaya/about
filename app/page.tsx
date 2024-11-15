import AnimatedGridPattern from '@/components/ui/animated-grid-pattern';
import HyperText from '@/components/ui/hyper-text';
import BlurIn from '@/components/ui/blur-in';
import TextReveal from '@/components/ui/text-reveal';
import { cn } from '@/lib/utils';
import { Vortex } from './components/vortex';

import IconCloud from '@/components/ui/icon-cloud';
import { Timeline } from '@/components/ui/timeline';
import { RainbowButton } from '@/components/ui/rainbow-button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { ExpandableCard } from './components/projects/project';
import SparklesText from '@/components/ui/sparkles-text';
import ShimmerButton from '@/components/ui/shimmer-button';

const slugs = [
  'typescript',
  'javascript',
  'dart',
  'java',
  'react',
  'flutter',
  'android',
  'html5',
  'css3',
  'nodedotjs',
  'express',
  'nextdotjs',
  'prisma',
  'amazonaws',
  'postgresql',
  'firebase',
  'vercel',
  'docker',
  'git',
  'github',
  'gitlab',
  'visualstudiocode',
  'androidstudio',
  'figma',
];

export default function Home() {
  const data = [
    {
      title: '2024',
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Currently learning Rust, Adobe After Effects, Adobe Animate, Adobe
            Photoshop, Blender, Unreal Engine 4
          </p>
          <div className="grid grid-cols-2 gap-4"></div>
        </div>
      ),
    },
    {
      title: '2023',
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Learnt SvelteJS, Prisma and MongoDB and Firebase and Supabase and
            Planetscale and MySQL and Postgres for Nextjs and Reactjs
            enhancements
          </p>

          <div className="grid grid-cols-2 gap-4"></div>
        </div>
      ),
    },
    {
      title: '2022',
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Learnt Flutter and dart basics, Gitlab, Amazon AWS basics, Figma and
            Spline for UI
          </p>

          <div className="grid grid-cols-2 gap-4"></div>
        </div>
      ),
    },
    {
      title: '2021',
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Learnt Nextjs basics, Reactjs, Django and Flask basics, GoLang
            basics, {'C/C++ basics'}
          </p>

          <div className="grid grid-cols-2 gap-4"></div>
        </div>
      ),
    },
    {
      title: '2020',
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Learnt basics of Expressjs, Nodejs, Javascript for HTML5 & CSS3
          </p>

          <div className="grid grid-cols-2 gap-4"></div>
        </div>
      ),
    },
    {
      title: '2019',
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Learnt C basics, HTML+CSS, Java and Python
          </p>
        </div>
      ),
    },
  ];

  return (
    <main className="flex flex-col items-center justify-center">
      <div className=" h-auto min-h-96 w-full flex items-center justify-center">
        <div className="relative flex flex-col h-screen w-full items-center justify-center overflow-hidden rounded-lg border bg-background p-20 md:shadow-xl">
          <HyperText
            className="text-5xl font-extrabold text-black dark:text-white"
            text="Abhyudaya"
          />
          <BlurIn
            word="Just another ordinary student from India"
            className="text-xl font-semibold text-black dark:text-white/60"
          />
          <AnimatedGridPattern
            numSquares={30}
            maxOpacity={0.1}
            duration={3}
            repeatDelay={1}
            className={cn(
              '[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]',
              'inset-x-0 inset-y-[-30%] h-[200%] skew-y-12'
            )}
          />
        </div>
      </div>
      <div className="z-10 rounded-[3rem] flex min-h-64 items-center w-full justify-center border bg-white dark:bg-black">
        <Vortex
          backgroundColor="black"
          className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
        >
          <TextReveal text="Blazing fast and ultra responsive, modern UI websites" />
        </Vortex>
      </div>
      <div className="skills h-auto min-h-96 w-full py-12 px-6">
        <h1 className="text-2xl font-extrabold text-black dark:text-white">
          Skills
        </h1>
        <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg px-20 pb-20 pt-8 ">
          <IconCloud iconSlugs={slugs} />
        </div>
        <div className="h-auto mb-20 w-full flex justify-center items-center">
          <Drawer>
            <DrawerTrigger>
              <RainbowButton>View in Tabular</RainbowButton>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                <DrawerDescription>
                  This action cannot be undone.
                </DrawerDescription>
              </DrawerHeader>
            </DrawerContent>
          </Drawer>
        </div>
        <h1 className="text-2xl font-extrabold text-black dark:text-white">
          Learnt
          <Timeline data={data} />
        </h1>
      </div>
      <div className=" relative bottom-52 w-full h-auto">
        <div className="projects h-auto w-full flex flex-col text-left items-center justify-center py-12 px-6">
          <h1 className="text-2xl font-extrabold text-black  mb-12 dark:text-white">
            Projects
          </h1>
          <ExpandableCard />
        </div>
      </div>
      <div className=" resume h-auto w-full px-6 pb-12">
        <h1 className="text-2xl font-extrabold text-black  mb-12 dark:text-white">
          <h1 className="text-2xl font-extrabold text-black  mb-12 dark:text-white">
            My resume
          </h1>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            <div className=" h-auto w-full flex items-center justify-center">
              <ShimmerButton className="px-8 py-4 mt-12 shadow-2xl">
                <SparklesText
                  className=" text-white font-thin"
                  text="Download CV"
                />
              </ShimmerButton>
            </div>
          </a>
        </h1>
      </div>
      <div className=" h-auto p-3 rounded-t-3xl bg-black w-full flex items-center justify-center">
        <h1 className=" text-sm font-bold">©Abhyudaya 2024 </h1>
      </div>
    </main>
  );
}
