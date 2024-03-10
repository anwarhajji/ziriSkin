import Head from "next/head";
import Link from "next/link";
import { useContext, } from 'react';
import { CursorContext } from '../lib/context';

import {
  Layout,
  Icon,
  BooksyButton,
  TransitionPageEffect,
  FlippedText,
} from "../components";

export default function Home() {
  const { setHoveringLink } = useContext(CursorContext);

  const handleMouseEnter = () => {
    setHoveringLink(true);
  };
  const handleMouseLeave = () => {
    setHoveringLink(false);
  };
  const { setHoveringText } = useContext(CursorContext);
  const handleMouseEnterText = () => {
    setHoveringText(true);
  };
  const handleMouseLeaveText = () => {
    setHoveringText(false);
  };

  const flippedTextHero = ['NAILS', 'LOOK', 'BEAUTY'];
  const flippedTextHeroSecond = ['care', 'gentleness', 'confidence'];

  return (
    <>
      <Head>
        <title> Beauty Zone</title>
        <meta name="description" content="ZIRI SKIN SALON" />
        <meta property="og:type" content="business.business" />
        <meta property="og:title" content="| ZIRI SKIN Zone" />
        <meta property="og:image" content="https://d375139uceb2i94.cloudfront.net/region2/pl/162702/logo/87abe39eef5d4f5cb4968854db35be-ziriskinbeauty-zone-logo-0b4580ef172240329bb5c6e7f314b3-booksy.jpeg" />
        <meta property="og:description" content="ZIRI BEAUTY" />
        <meta property="business:contact_data:street_address" content="BAHREIN" />
        <meta property="business:contact_data:locality" content="ZIRI SKIN" />
        <meta property="business:contact_data:postal_code" content="000000" />
        <meta property="business:contact_data:country_name" content="BAHREIN" />
      </Head>

      <TransitionPageEffect />
      <main className="">
        <section className="flex w-full flex-col items-center justify-center min-h-[100vh]">
          <Layout className="pt-0 pb-16 md:pt-16 sm:pt-0 sm:pb-16">
            <div className="w-full flex flex-col items-center justify-between">
              <div className="w-full flex flex-col items-center self-center">
                <CursorContext.Consumer>
                  {({ isHoveringText }) => (
                    <div
                      className={`inline-flex flex-col gap-2 w-full font-bold capitalize text-left text-8xl 2xl:text-6xl xl:text-4xl  ${isHoveringText
                        ? "text-dark bg-inherit dark:bg-inherit dark:text-light"
                        : "text-dark dark:bg-inherit dark:text-light"
                        } md:text-4xl dark:bg-inherit text-dark`}
                      onMouseEnter={handleMouseEnterText}
                      onMouseLeave={handleMouseLeaveText}
                    >
                      <div>
                        <div className="inline sm:block sm:mb-3">
                        Take Care Of Yours
                        </div>{" "}
                        <FlippedText textVariants={flippedTextHero} />
                      </div>
                      <div>
                        <div className="inline sm:block sm:mb-3">And Feel </div>{" "}
                        <FlippedText textVariants={flippedTextHeroSecond} />
                      </div>
                      
                    </div>
                  )}
                </CursorContext.Consumer>
              </div>

              <p className="my-4 text-base font-medium self-start text-dark dark:text-light w-[80%] xs:w-full">
              Welcome to the all new ZIRI SKIN and Beauty We know how important it is for you to have a reliable place 
              where you can organize not only your nails, but also your thoughts. ZIRI SKIN is a truly atmospheric and spiritual place that will help you relax, recharge with beauty and good vibrations.

.
              </p>
              <div className="flex items-center self-start mt-2 sm:flex-col xs:w-full">
                <Link
                  className="flex items-center justify-center bg-dark text-light p-2.5 px-6 xs:px-4 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light dark:text-dark dark:bg-light sm:mb-4 xs:w-full"
                  href="https://www.booking-wp-plugin.com/use-cases/spa-salon-online/#bk_form"
                  target="_blank"
                  download
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  GET DISCOUNT 10%
                  <Icon name="linkArrow" size={24} className="ml-2" />
                </Link>
                <Link
                  className="flex items-center sx:w-full xs:mt-4 ml-4 xs:ml-0 font-medium capitalize underline text-lg dark:text-light text-dark "
                  href="tel:212621903906"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  CALL NOW
                </Link>
              </div>
            </div>
          </Layout>
        </section>
        <BooksyButton className="fixed right-4 bottom-2 lg:bottom-0" />

      </main >
    </>
  );
}
