import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import {
  AnimatedText,
  AnimatedValue,
  Layout,
  FrameWhiteBlack,
  TransitionPageEffect,
  // Employee,
  ServicesSchedule,
} from '../../components';
import BlackLady from '../../../public/images/about/about.jpg';
import { stagesDataAboutSchedule, aboutMainText } from '../../lib';


export default function About() {
  const [daysSince, setDaysSince] = useState(0);
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress)

  const background = useTransform(
    scrollYProgress,
    [0, .0125, .25, 1],
    ["#7053ff", "#53b4ff", "#7053ff", "#B63E96"]
  )

  useEffect(() => {
    const decemberSecond = new Date('December 02, 2022');
    const today = new Date();
    const timeDiff = Math.abs(today.getTime() - decemberSecond.getTime());
    const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
    setDaysSince(daysDiff);
  }, []);

  // const motionSettings = {
  //   initial: { y: 50 },
  //   whileInView: { y: 0 },
  //   transition: { duration: 1, type: 'spring', delay: 0.1 },
  //   viewport: { once: true },
  // };


  return (
    <>
      <Head>
        <title>about | zirir</title>
        
        
      </Head>
      <TransitionPageEffect />

      <section className="flex w-full flex-col items-center justify-center dark:text-light">
        <motion.div
          className='z-[1001] fixed w-full h-[20px] md:h-1 top-0 rounded-r-lg'
          style={{
            scaleX,
            transformOrigin: "left",
            background,
            zIndex: 1001,
          }}
        />
        <Layout className="pt-8">

          {/* //? History of Gingkkker <History /> */}
          <AnimatedText
            text="About ZIRI SKIN"
            className="my-24 xl:text-6xl lg:text-5xl xs:text-3xl xs:mb-12"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8 items-center">
            <div className="col-span-3 xl:col-span-4 flex flex-col items-start justify-start md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                {aboutMainText.heading}
              </h2>
              <p className="font-medium">
                {aboutMainText.paragraph01}
              </p>
              <p className="my-4 font-medium">
                {aboutMainText.paragraph02}
              </p>
              <p className="font-medium">
                {aboutMainText.paragraph03}
              </p>
            </div>

            <FrameWhiteBlack className="col-span-3 xl:col-span-4 md:order-1 md:col-span-8 min-h-[600px]">
              <Image
                src={BlackLady}
                alt="BlackLady"
                className="absolurte -z-1 p-2 rounded-2xl w-full h-auto"
                style={{ objectFit: 'cover' }}
                fill
                priority
                sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw, 50vw"
              />
            </FrameWhiteBlack>
            <div className="col-span-2 xl:col-span-8 xl:flex-row xl:items-center flex flex-col items-end justify-between h-full md:order-3">
              <div className="flex flex-col items-end justify-center xl:items-center ">
                <span className="inline-block text-7xl font-bold dark:text-light/75 md:text-4xl xs:text-2xl">
                  <AnimatedValue value={1080} className="dark:text-light/75 " />+
                </span>
                <h2 className="text-xl text-end font-medium capitalize text-dark/75 dark:text-light/75 lg:text-center xs:text-xs xs:mr-1">
                Satisfied Customers
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center  xl:items-center">
                <span className="inline-block text-7xl font-bold dark:text-light/75 md:text-4xl xs:text-2xl">
                  <AnimatedValue
                    value={daysSince}
                    className="dark:text-light/75"
                  />
                </span>
                <h2 className="text-xl text-end font-medium capitalize text-dark/75 dark:text-light/75 lg:text-center xs:text-xs xs:mr-1">
                 Working Days
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center  xl:items-center">
                <span className="inline-block text-7xl font-bold dark:text-light/75 md:text-4xl xs:text-2xl">
                  <AnimatedValue value={24} className="dark:text-light/75" /> +
                </span>
                <h2 className="text-xl text-end font-medium capitalize text-dark/75 dark:text-light/75 lg:text-center xs:text-xs xs:mr-1">
                  TEAM
                </h2>
              </div>
            </div>
          </div>



          {/* //? Employee */}
          {/* 
          <div className="w-full my-16 mx-auto">
            <motion.h3
              {...motionSettings}
              className="text-8xl font-bold text-center lg:text-5xl xs:text-3xl "
            >
              Nasi specjaliści od piękna
            </motion.h3>

            <ul className="flex flex-wrap gap-16 items-center justify-center w-full my-16">
              {employeeData.map((employee) => (
                <Employee
                  key={employee.id}
                  name={employee.name}
                  position={employee.position}
                  imageSrc={employee.imageSrc}
                  booksyLink={employee.booksyLink}
                />
              ))}
            </ul>
          </div> */}
          <div className="w-full my-16 mx-auto">
            <div className="xl:flex xl:flex-row-reverse xl:justify-between xl:gap-[29px] 2xl:gap-[44px]">
              <ServicesSchedule name="DLACZEGO WARTO NAS WYBRAĆ?" data={stagesDataAboutSchedule} />
            </div>
          </div>
        </Layout>
      </section>
    </>
  );
}
