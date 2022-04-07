import React from 'react';
import Image from 'next/image';
import secondImg from '../../../public/2.jpg';

const Second = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: 600,
      }}
    >
      adsadhdshadhsasdhsdahdashhdashasdh
      <Image
        src={secondImg}
        alt="second image"
        layout="fixed"
        width={400}
        height={400}
      />
    </div>
  );
};

export default Second;
