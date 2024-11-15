import React from 'react';
import { Dock, DockIcon } from '@/components/ui/dock';
import { File, Folder, Tree } from '@/components/ui/file-tree';

export type IconProps = React.HTMLAttributes<SVGElement>;

function Page() {
  return (
    <main className=" min-h-96 h-auto w-full flex items-center justify-center">
      <div className="relative flex h-auto w-96 flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
        <Tree
          className="p-2 overflow-hidden rounded-md bg-background"
          initialSelectedId="7"
          initialExpandedItems={[
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8',
            '9',
            '10',
            '11',
          ]}
          elements={ELEMENTS}
        >
          <Folder element="Abhyudaya" value="1">
            <Folder value="2" element="contactDirects">
              <File value="3">
                <p>+91 994 298 7304</p>
              </File>
              <File value="4">
                <p>advwastaken@gmail.com</p>
              </File>
            </Folder>
            <Folder value="5" element="contactLinks">
              <Folder value="6" element="Discord">
                <File value="7">
                  <p>Atomic.js</p>
                </File>
              </Folder>
              <Folder value="7" element="Github">
                <File value="8">
                  <p>@deepabhyudaya</p>
                </File>
              </Folder>
              <Folder value="8" element="LinkedIn">
                <File value="9">
                  <p>Abhyudaya Deep Verma</p>
                </File>
              </Folder>
            </Folder>
            {/* <Folder value="10" element="Dislikes">
              <File value="11">
                <p>When others say {'"Chai tea"'}</p>
              </File>
            </Folder> */}
          </Folder>
        </Tree>
      </div>
    </main>
  );
}

const ELEMENTS = [
  {
    id: '1',
    isSelectable: true,
    name: 'src',
    children: [
      {
        id: '2',
        isSelectable: true,
        name: 'app',
        children: [
          {
            id: '3',
            isSelectable: true,
            name: 'layout.tsx',
          },
          {
            id: '4',
            isSelectable: true,
            name: 'page.tsx',
          },
        ],
      },
      {
        id: '5',
        isSelectable: true,
        name: 'components',
        children: [
          {
            id: '6',
            isSelectable: true,
            name: 'header.tsx',
          },
          {
            id: '7',
            isSelectable: true,
            name: 'footer.tsx',
          },
        ],
      },
      {
        id: '8',
        isSelectable: true,
        name: 'lib',
        children: [
          {
            id: '9',
            isSelectable: true,
            name: 'utils.ts',
          },
        ],
      },
    ],
  },
];

export default Page;
