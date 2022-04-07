import React from 'react';
import Image from 'next/image';
import third from '../../../public/3.jpg';

const Third = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: 600,
      }}
    >
      adasdjsdajkndkasndkasndksandsnaknkasndaksndk
      <Image
        src={third}
        alt="third image"
        layout="fixed"
        width={400}
        height={400}
      />
    </div>
  );
};

export default Third;
