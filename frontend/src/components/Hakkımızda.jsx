import { Social } from "./Social";

export default function Hakkımızda() {
  return (
    <section className="mt-12">
      <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
        <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
          <svg
            className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
            viewBox="0 0 100 100"
            fill="currentColor"
            preserveAspectRatio="none slice">
            <path d="M50 0H100L50 100H0L50 0Z" />
          </svg>
          <img
            className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
            src="./src/assets/about_pic1.jpeg"
            alt=""
          />
        </div>
        <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
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
                className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 bg-[#28b862] rounded shadow-md hover:bg-[#1b8f4a] focus:shadow-outline focus:outline-none">
                Vizyon & Misyon
              </a>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700">
                Anasayfa
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-screen-sm sm:text-center sm:mx-auto">
            <a
              href="/"
              aria-label="View"
              className="inline-block mb-5 rounded-full sm:mx-auto">
              <div className="flex items-center justify-center w-32 h-32 mb-4 bg-gray-100 rounded-full shadow-2xl">
                <img src="./src/assets/4PEAK_SİYAH.png" />
              </div>
            </a>
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
              hedefliyoruz. Misyonumuz: Misyonumuz, reklam, trend takibi, niş
              pazar araştırması ve içerik üretimi konularında uzmanlaşmış
              ekibimizle müşterilerimizin dijital varlıklarını güçlendirmektir.
              Müşterilerimizle iş birliği yaparak, onların markalarını daha
              görünür kılmak ve hedef kitlelerine en etkili şekilde ulaşmalarını
              sağlamak için çalışıyoruz."Creativity, change, grow" sloganımız
              doğrultusunda, her projede en iyi sonuçları elde etmek
              için çabalıyoruz.
            </p>
            <hr className="w-full my-8 border-gray-300" />
          </div>
          <Social />
        </div>
      </div>
    </section>
  );
}
