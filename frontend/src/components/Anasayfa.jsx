"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import LogoSlider from "./LogoSlider";
import Maps from "./Maps";

export default function Home() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);

  // Animation variants
  const fadeInUp = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div className="section bg-white">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#035882] to-[#2dad63] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Creativity, Change, Grow.
              <a href="#" className="font-semibold text-indigo-600">
                <span aria-hidden="true" className="absolute inset-0" />
              </a>
            </div>
          </div>
          <div className="text-center">
            <motion.h1
              ref={titleRef}
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              transition={{ duration: 0.5 }}
              className="text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
              4 Peak Digital Agency
            </motion.h1>
            <motion.p
              ref={subtitleRef}
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
              4Peak olarak, dijital dünyada markanızı bir adım öne çıkaracak
              çözümler sunuyoruz.
            </motion.p>
            <motion.div
              ref={buttonRef}
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Başlarken
              </a>
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-gray-900">
                Hakkımızda <span aria-hidden="true">→</span>
              </a>
            </motion.div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#035882] to-[#1c8a6e] opacity-30 sm:left-[calc(50%+6rem)] sm:w-[72.1875rem]"
          />
        </div>
        <section>
          <div>
            <LogoSlider />
          </div>
        </section>

        <section className="py-10 bg-transparent sm:py-16 lg:py-24">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                How does it work?
              </h2>
              <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis.
              </p>
            </div>

            <div className="relative mt-12 lg:mt-20">
              <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
                <img
                  className="w-full"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg"
                  alt=""
                />
              </div>

              <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
                <div>
                  <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                    <span className="text-xl font-semibold text-gray-700">
                      {" "}
                      1{" "}
                    </span>
                  </div>
                  <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">
                    Create a free account
                  </h3>
                  <p className="mt-4 text-base text-gray-600">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
                  </p>
                </div>

                <div>
                  <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                    <span className="text-xl font-semibold text-gray-700">
                      {" "}
                      2{" "}
                    </span>
                  </div>
                  <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">
                    Build your website
                  </h3>
                  <p className="mt-4 text-base text-gray-600">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
                  </p>
                </div>

                <div>
                  <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                    <span className="text-xl font-semibold text-gray-700">
                      {" "}
                      3{" "}
                    </span>
                  </div>
                  <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">
                    Release & Launch
                  </h3>
                  <p className="mt-4 text-base text-gray-600">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* cards kısmı başlangıc */}
        <section>
          <div className="text-center py-10">
            <p className="text-4xl font-bold text-teal-700 uppercase tracking-wide">
              Çalıştığımız Markalar
            </p>
            <div className="mt-4 w-24 mx-auto h-1 bg-green-600"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="relative rounded-lg overflow-hidden shadow-lg max-w-xl bg-gray-800">
              <img
                className="absolute inset-0 w-full h-full object-cover opacity-70"
                src="/4PEAK_SİYAH.png"
                alt="4Peak Black Logo Background"
              />
              <div className="relative p-8 text-white">
                <h1 className="text-3xl font-bold mb-4">Marka 1 Başlık</h1>
                <p className="mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
                  doloremque sed soluta placeat labore veniam provident quidem
                  iusto minus veritatis!
                </p>
                <div className="flex items-center">
                  <img
                    className="w-10 h-10 rounded-full mr-4"
                    src="/profile1.png"
                    alt="Profile Picture"
                  />
                  <div>
                    <p className="font-bold">Mathew Glock</p>
                    <p className="text-sm text-gray-300">Marketing Manager</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative rounded-lg overflow-hidden shadow-lg max-w-xl bg-gray-800">
              <img
                className="absolute inset-0 w-full h-full object-cover opacity-70"
                src="/4PEAK_SİYAH.png"
                alt="4Peak Black Logo Background"
              />
              <div className="relative p-8 text-white">
                <h1 className="text-3xl font-bold mb-4">Marka 2 Başlık</h1>
                <p className="mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
                  doloremque sed soluta placeat labore veniam provident quidem
                  iusto minus veritatis!
                </p>
                <div className="flex items-center">
                  <img
                    className="w-10 h-10 rounded-full mr-4"
                    src="/profile2.png"
                    alt="Profile Picture"
                  />
                  <div>
                    <p className="font-bold">Lorem, ipsum.</p>
                    <p className="text-sm text-gray-300">Creative Director</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-lg max-w-xl bg-gray-800">
              <img
                className="absolute inset-0 w-full h-full object-cover opacity-70"
                src="/4PEAK_SİYAH.png"
                alt="4Peak Black Logo Background"
              />
              <div className="relative p-8 text-white">
                <h1 className="text-3xl font-bold mb-4">Marka 2 Başlık</h1>
                <p className="mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
                  doloremque sed soluta placeat labore veniam provident quidem
                  iusto minus veritatis!
                </p>
                <div className="flex items-center">
                  <img
                    className="w-10 h-10 rounded-full mr-4"
                    src="/profile2.png"
                    alt="Profile Picture"
                  />
                  <div>
                    <p className="font-bold">Lorem, ipsum.</p>
                    <p className="text-sm text-gray-300">Creative Director</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-lg max-w-xl bg-gray-800">
              <img
                className="absolute inset-0 w-full h-full object-cover opacity-70"
                src="/4PEAK_SİYAH.png"
                alt="4Peak Black Logo Background"
              />
              <div className="relative p-8 text-white">
                <h1 className="text-3xl font-bold mb-4">Marka 2 Başlık</h1>
                <p className="mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
                  doloremque sed soluta placeat labore veniam provident quidem
                  iusto minus veritatis!
                </p>
                <div className="flex items-center">
                  <img
                    className="w-10 h-10 rounded-full mr-4"
                    src="/profile2.png"
                    alt="Profile Picture"
                  />
                  <div>
                    <p className="font-bold">Lorem, ipsum.</p>
                    <p className="text-sm text-gray-300">Creative Director</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* cards kısmı bitiş */}
        <h1 className="text-center text-2xl font-bold m-11">
          Google Maps Haritası
        </h1>
        <Maps />
      </div>
    </div>
  );
}
