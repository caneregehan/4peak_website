import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Hakkımızda() {
  // Define your animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 1.5, ease: "easeOut" } },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0, transition: { duration: 1.5, ease: "easeOut" } },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    show: { opacity: 1, x: 0, transition: { duration: 1.5, ease: "easeOut" } },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.5 },
    show: { opacity: 1, scale: 1, transition: { duration: 1.5, ease: "easeOut" } },
  };

  // Animation controls and refs
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const controls4 = useAnimation();
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);

  const inView1 = useInView(ref1, { once: true });
  const inView2 = useInView(ref2, { once: true });
  const inView3 = useInView(ref3, { once: true });
  const inView4 = useInView(ref4, { once: true });

  useEffect(() => {
    if (inView1) controls1.start("show");
    if (inView2) controls2.start("show");
    if (inView3) controls3.start("show");
    if (inView4) controls4.start("show");
  }, [inView1, inView2, inView3, inView4]);

  return (
    <section className="mt-12">
      <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
        <motion.div
          ref={ref1}
          initial="hidden"
          animate={controls1}
          variants={fadeInLeft}
          className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0"
        >
          <svg
            className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
            viewBox="0 0 100 100"
            fill="currentColor"
            preserveAspectRatio="none slice"
          >
            <path d="M50 0H100L50 100H0L50 0Z" />
          </svg>
          <img
            className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
            src="./src/assets/about_pic1.jpeg"
            alt=""
          />
        </motion.div>

        <motion.div
          ref={ref2}
          initial="hidden"
          animate={controls2}
          variants={fadeInUp}
          className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl"
        >
          <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
            <img
              src="./src/assets/4PEAK_SİYAH.png"
              className="inline-block w-auto h-auto px-3 py-px mx-auto mb-4 rounded-full"
            />
            <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Creativity, Change, Grow.
            </h2>
            <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
              Bizler dijital çağın hızla değişen dinamiklerine uyum sağlayan ve
              markaların dijital dünyada güçlü bir varlık göstermesine yardımcı
              olan bir sosyal medya ajansıyız.
            </p>
            <div className="flex items-center">
              <a
                href="/"
                className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 bg-[#28b862] rounded shadow-md hover:bg-[#1b8f4a] focus:shadow-outline focus:outline-none"
              >
                Vizyon & Misyon
              </a>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                Anasayfa
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      <div>
        <motion.div
          ref={ref3}
          initial="hidden"
          animate={controls3}
          variants={fadeInRight}
          className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
        >
          <motion.div
            ref={ref4}
            initial="hidden"
            animate={controls4}
            variants={scaleIn}
            className="max-w-screen-sm sm:text-center sm:mx-auto"
          >
            <h2 className="mb-4 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Vizyonumuz & Misyonumuz
            </h2>
            <hr className="w-full my-8 border-gray-300" />
            <p className="text-base text-gray-700 md:text-lg sm:px-4">
              4Peak olarak, dijital dünyada markaların en üst seviyeye
              ulaşmasını sağlamak için yenilikçi ve yaratıcı çözümler sunmayı
              amaçlıyoruz. Amacımız, sosyal medyanın gücünü kullanarak
              müşterilerimizin işlerini büyütmek ve onları sektörlerinde lider
              konuma getirmektir. Geleceğin dijital trendlerini takip ederek,
              müşterilerimize her zaman en güncel ve etkili stratejileri sunmayı
              hedefliyoruz.
            </p>
            <hr className="w-full my-8 border-gray-300" />
          </motion.div>

          <Social />
        </motion.div>
      </div>
    </section>
  );
}

// Social Component
export const Social = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  // Staggered animation
  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0, transition: { duration: 2.5 } },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: -150 },
    show: { opacity: 1, x: 0, transition: { duration: 2.5 } },
  };

  useEffect(() => {
    if (inView) controls.start("show");
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={staggerContainer}
      className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
    >
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            4 Peak Digital
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <span className="relative">Sosyal Medya Hesaplarımız</span>
          </span>{" "}
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          Bizi sosyal medya hesaplarımızdan takip edebilirsiniz.
        </p>
      </div>
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {socialMediaData.map((data, index) => (
          <motion.div
            key={index}
            initial="hidden"
            animate={controls}
            variants={index % 2 === 0 ? slideInLeft : slideInRight} // Alternate animations
          >
            <a
              href={data.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative block overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl"
            >
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                src={data.image}
                alt={data.alt}
              />
              <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-1 text-lg font-bold text-gray-100">
                  {data.name}
                </p>
                <p className="mb-4 text-xs tracking-wide text-gray-400"></p>
              </div>
            </a>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

// Sample social media data
const socialMediaData = [
  {
    link: "https://istediğiniz-url.com",
    image: "./src/assets/mockup1.png",
    alt: "4peakdigital",
    name: "4peakdigital",
  },
  {
    link: "https://istediğiniz-url.com",
    image: "https://images.pexels.com/photos/3931603/pexels-photo-3931603.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Andrew Larkin",
    name: "Andrew Larkin",
  },
  {
    link: "https://istediğiniz-url.com",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    alt: "Sophie Denmo",
    name: "Sophie Denmo",
  },
  {
    link: "https://istediğiniz-url.com",
    image: "https://images.pexels.com/photos/3931553/pexels-photo-3931553.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Benedict Caro",
    name: "Benedict Caro",
  },
];
