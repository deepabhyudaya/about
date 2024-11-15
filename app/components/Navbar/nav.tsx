'use client';

import React from 'react';
import { PlaceholdersAndVanishInput } from '@/app/components/placeholders-and-vanish-input';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

import { VercelCMDK } from '../cmdk';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function Nav() {
  function onClickAbout() {
    window.location.href = '/about';
  }
  const placeholders = [
    'Search...',
    'What do you need?',
    'Describe your requirements?',
  ];
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('submitted');
  };
  const pathname = usePathname();
  return (
    <div className="min-h-24 bg-black rounded-b-3xl h-auto w-full flex items-center">
      <div className="h-full w-1/5 flex items-center justify-center">
        {/* <Link href={'/'}>
          <Image
            src={'/logo_pixels.png'}
            alt="logo"
            width={100}
            height={100}
            unoptimized
            className="h-12 w-12"
          ></Image>
        </Link> */}
        {pathname == '/about' || pathname == '/contact' ? (
          <Link href={'..'}>
            <BackIcon />
          </Link>
        ) : (
          <Link href={'/'}>
            <Image
              src={'/logo_pixels.png'}
              alt="logo"
              width={100}
              height={100}
              unoptimized
              className="h-12 w-12"
            ></Image>
          </Link>
        )}
      </div>
      <div className="h-full w-3/5 flex items-center justify-center">
        <Dialog>
          <DialogTrigger>
            <PlaceholdersAndVanishInput
              placeholders={placeholders}
              onChange={handleChange}
              onSubmit={onSubmit}
            />
          </DialogTrigger>
          <DialogContent>
            <DialogTitle></DialogTitle>
            <VercelCMDK />
          </DialogContent>
        </Dialog>
      </div>
      <div className="h-full w-1/5 flex items-center justify-center">
        <Sheet>
          <SheetTrigger>
            <svg
              className="svg-icon h-6 w-6"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M64.28704 864h416a64 64 0 0 1 4.8 127.84L480.28704 992H64.28704a64 64 0 0 1-4.8-127.84L64.28704 864h416H64.28704z m0-416h832a64 64 0 0 1 4.8 127.84L896.28704 576H64.28704a64 64 0 0 1-4.8-127.84L64.28704 448zM480.28704 48h416a64 64 0 0 1 4.8 127.84L896.28704 176H480.28704a64 64 0 0 1-4.8-127.84L480.28704 48z"
                fill="#656565FF"
              />
            </svg>
          </SheetTrigger>
          <SheetContent side={'left'}>
            <SheetHeader className=" py-12 space-y-3">
              <Link href={'/'}>
                <SheetTitle>
                  <span className=" text-5xl font-thin">HOME</span>
                </SheetTitle>
              </Link>
              <Link href={'/about'}>
                <SheetTitle>
                  <span className=" text-5xl font-thin">ABOUT</span>
                </SheetTitle>
              </Link>
              <Link href={'/contact'}>
                <SheetTitle>
                  <span className=" text-5xl font-thin">CONTACT</span>
                </SheetTitle>
              </Link>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}

function BackIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-arrow-left"
    >
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  );
}

export default Nav;
