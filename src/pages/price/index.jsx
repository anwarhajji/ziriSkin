/* eslint-disable react/no-unknown-property */
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { motion, useScroll } from 'framer-motion';
import { useContext } from 'react';
import {
  AnimatedText,
  BooksyButton,
  FrameWhiteBlack,
  GingerButton,
  Icon,
  Layout,
  PriceList,
  Tabs,
  TransitionPageEffect,
} from '../../components';
import BlackLadyPrice from '../../../public/images/price/2.webp';
import { CursorContext, priceDataEyes, priceDataNails, socialLink } from '../../lib';

export default function Price() {
  const { setHoveringText, setHoveringLink } = useContext(CursorContext);

  const handleMouseEnter = () => {
    setHoveringText(true);
  };
  const handleMouseLeave = () => {
    setHoveringText(false);
  };

  const handleMouseEnterLink = () => {
    setHoveringLink(true);
  };
  const handleMouseLeaveLink = () => {
    setHoveringLink(false);
  };

  const AnimatedLink = motion(Link);

  const tabsPriceItems = [
    {
      title: 'NAILS',
      content: (
        <div className='p-4'>
          <PriceList categories={priceDataNails} />
        </div>
      ),
    },
    {
      title: 'Eyebrows/Elashes/Makeup',
      content: (
        <div className='p-4'>
          <PriceList categories={priceDataEyes} />
        </div>
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>ziri</title>
        <meta name="description" content="Obejrzyj naszą galerię zdjęć, aby zobaczyć, jakie efekty osiągamy w naszym salonie ZIRIGO Zone." />
      </Head>
      <TransitionPageEffect />
      <section className="flex w-full flex-col items-center justify-center">
        <Layout className="py-10">
         
          <h1
            className="inline-block w-full font-bold capitalize text-8xl text-dark dark:bg-dark dark:text-light text-center xl:!text-4xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
          >Our Prices
          </h1>
          <Tabs items={tabsPriceItems} />

          <div className="grid place-content-center">
            <AnimatedLink
              className="inline-flex"
              href={socialLink.booksy}
              target="_blank"
              whileTap={{ scale: 0.9 }}
              onMouseEnter={handleMouseEnterLink}
              onMouseLeave={handleMouseLeaveLink}
            >
              <Icon name="booksy" size={140} className='fill-current text-dark dark:text-light' />
            </AnimatedLink>
          </div>
          <BooksyButton className="fixed left-4 bottom-2 lg:bottom-0 lg:left-0" />
        </Layout>
      </section >
    </>
  );
}

export function LiIcon({ reference }) {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ['center end', 'center center'],
    layoutEffect: false,
  });
  return (
    <figure className="absolute left-0 stroke-dark dark:stroke-light sm:-left-5">
      <svg className="-rotate-45" width="75" height="75" viewBox="0 0 100 50">
        <circle
          cx="75"
          cv="50"
          r="20"
          className="stroke-primary stroke-1 fill-none dark:stroke-primaryDark"
        />
        <motion.circle
          cx="75"
          cv="50"
          r="20"
          className=" stroke-[5px] fill-light dark:fill-dark"
          style={{
            pathLength: scrollYProgress,
          }}
        />
        <circle
          cx="75"
          cv="50"
          r="10"
          className="animate-pulse stroke-1 fill-primary dark:fill-primaryDark"
        />
      </svg>
    </figure>
  );
}

LiIcon.propTypes = {
  reference: PropTypes.shape({
    prop1: PropTypes.string,
    prop2: PropTypes.number,
  }).isRequired,
};
