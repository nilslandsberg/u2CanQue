import React from 'react';
import FacebookLink from './FacebookLink';
import Image from 'next/image';

function Footer() {
  return (
    <div className="footer-container">
      <div className="bg-slate-600 dark:bg-gray-900 w-full z-50 top-0 left-0 border-t border-gray-200 dark:border-gray-600">
        <div className="flex flex-col items-center justify-center md:flex-row md:justify-end py-4 px-6">
          <div className="mb-4 md:mb-0">
            <Image src="/images/U2CanQueLogo.svg" alt="logo" width={175} height={175} className="max-w-full" />
          </div>
          <div className="business-info-container text-white text-center md:text-start md:ml-6">
            <div>212 3rd St b</div>
            <div>Marietta, OH 45750</div>
            <div>(740) 236-7269</div>
            <div>u2canque@gmail.com</div>
          </div>
          <FacebookLink />
        </div>
      </div>
    </div>
  );
}

export default Footer;
