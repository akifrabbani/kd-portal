"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function ActivityCarousel() {
  const t = useTranslations("Home.Activity");
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const images = [
    "japan.webp",
    "india.webp",
    "med4irn.webp",
    "china.webp",
    "wdet.webp",
  ];

  return (
    <section className="container py-12 lg:border-x lg:border-washed-100 lg:py-[84px] xl:grid xl:grid-cols-12">
      <Carousel setApi={setApi} className="col-span-10 col-start-2 space-y-6">
        <div className="flex flex-col gap-12 lg:flex-row">
          <div className="space-y-4.5 lg:w-1/3">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-foreground">
              {t("overline")}
            </p>
            <h2 className="text-balance font-poppins text-hsm font-semibold">
              {t(`title${current + 1}`)}
            </h2>
            <p className="text-pretty text-black-700">
              {t(`desc${current + 1}`)}
            </p>
          </div>
          <div className="lg:w-2/3">
            <CarouselContent>
              {images.map((src, index) => (
                <CarouselItem key={index}>
                    <Image
                      priority
                      src={`/images/${src}`}
                      width={750}
                      height={450}
                      alt={t(`title${index + 1}`)}
                      className="h-[300px] w-full rounded-[32px] border border-outline-200 object-cover sm:h-[450px]"
                    />
                </CarouselItem>
              ))}
            </CarouselContent>
          </div>
        </div>

        <div className="flex flex-col-reverse items-center gap-6 lg:flex-row lg:justify-between">
          <div className="space-x-3">
            <CarouselPrevious className="static size-[42px] transform-none" />
            <CarouselNext className="static size-[42px] transform-none" />
          </div>

          <div className="flex items-center gap-x-2">
            {Array(images.length)
              .fill(null)
              .map((_, i) => (
                <svg
                  key={i}
                  viewBox={i === current ? "0 0 15 8" : "0 0 8 8"}
                  className={
                    i === current
                      ? "h-2 w-[15px] text-brand-700"
                      : "size-2 text-outline-300"
                  }
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0"
                    width={i === current ? 15 : 8}
                    height="8"
                    rx="4"
                    fill="currentColor"
                  />
                </svg>
              ))}
          </div>
        </div>
      </Carousel>
    </section>
  );
}