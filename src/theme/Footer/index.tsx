import React from 'react';
import type FooterType from '@theme/Footer';
import type { WrapperProps } from '@docusaurus/types';
import { GitHubLogoIcon, TwitterLogoIcon, DiscordLogoIcon } from '@radix-ui/react-icons';

type Props = WrapperProps<typeof FooterType>;

export default function FooterWrapper(props: Props): JSX.Element {
  return (
    <section className="py-8 bg-zinc-950 sm:py-10 lg:py-12 text-white">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className='flex flex-col items-center sm:items-start gap-8 sm:flex-row sm:justify-between'>
          <div className='flex flex-col items-center sm:items-start gap-4'>
            <img className="h-12 w-36 sm:h-14 sm:w-40" src="https://www.farmfe.org/img/logo-farm.png" alt="" />
            <span className='text-lg sm:text-xl font-bold text-center sm:text-left'>Extremely Fast Web Build Tool Written in Rust</span>
          </div>
          <div className="w-full sm:w-auto">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-x-12">
              <div>
                <p className="text-base text-gray-500 font-semibold mb-4">Guide</p>
                <ul className="list-none space-y-3 p-0">
                  <li>
                    <a href="#" title="" className="text-sm sm:text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Quick Start </a>
                  </li>
                  <li>
                    <a href="#" title="" className="text-sm sm:text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Introduction </a>
                  </li>
                </ul>
              </div>

              <div>
                <p className="text-base text-gray-500 font-semibold mb-4">Community</p>
                <ul className="list-none space-y-3 p-0">
                  <li>
                    <a href="#" title="" className="text-sm sm:text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> WeChat Group </a>
                  </li>
                  <li>
                    <a href="#" title="" className="text-sm sm:text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Discord </a>
                  </li>
                </ul>
              </div>

              <div>
                <p className="text-base text-gray-500 font-semibold mb-4">More</p>
                <ul className="list-none space-y-3 p-0">
                  <li>
                    <a href="#" title="" className="text-sm sm:text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Github </a>
                  </li>
                  <li>
                    <a href="#" title="" className="text-sm sm:text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Twitter </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="my-8 sm:my-12" />

        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
          <ul className="flex items-center space-x-4 mb-4 sm:mb-0 p-0">
            <GitHubLogoIcon className='h-5 w-5 sm:h-6 sm:w-6' />
            <TwitterLogoIcon className='h-5 w-5 sm:h-6 sm:w-6' />
            <DiscordLogoIcon className='h-5 w-5 sm:h-6 sm:w-6' />
          </ul>

          <p className="text-xs sm:text-sm text-center text-gray-100">Copyright © 2024 Farm Community. Built with Docusaurus.</p>
        </div>
      </div>
    </section>
  );
}
