import React from 'react';
import Image from 'next/image';
import firstImg from '../../../public/1.jpg';

const First = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: 600,
      }}
    >
      sdaisdaidsiasiadsidaisdsidasdidnancnsaccn
      <Image
        src={firstImg}
        alt="first image"
        layout="fixed"
        width={400}
        height={400}
        priority
      />
    </div>
  );
};

export default First;
