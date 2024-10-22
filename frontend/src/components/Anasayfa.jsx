"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import LogoSlider from "./LogoSlider";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 80%",
        end: "top 30%",
        scrub: true,
        markers: false, // Animasyonu takip etmek için işaretçileri etkinleştir
      },
    });

    tl.fromTo(
      titleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 }
    )
      .fromTo(
        subtitleRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        "-=0.5" // Başka bir animasyon ile üst üste bindirmek için
      )
      .fromTo(
        buttonRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        "-=0.5"
      );

    // Alt bölüm için animasyon
    const sections = document.querySelectorAll(".section");
    sections.forEach((section) => {
      gsap.fromTo(
        section,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse",
            markers: false, // Her bir bölüm için işaretçileri etkinleştir
          },
        }
      );
    });

    return () => {
      // Tüm ScrollTrigger'ları temizle
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className=" section bg-white">
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
        <div className=" mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className=" hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Creativity, Change, Grow.
              <a href="#" className="font-semibold text-indigo-600">
                <span aria-hidden="true" className="absolute inset-0" />
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1
              ref={titleRef}
              className="text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
              4 Peak Digital Agency
            </h1>
            <p
              ref={subtitleRef}
              className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
              4Peak olarak, dijital dünyada markanızı bir adım öne çıkaracak
              çözümler sunuyoruz.
            </p>
            <div
              ref={buttonRef}
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
            </div>
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
      </div>
    </div>
  );
}
