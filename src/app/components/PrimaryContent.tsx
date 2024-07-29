import { HeroProps } from "@/slices/Hero";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import Image from "next/image";
import desktopImage from '../../../public/image-web-3-desktop.jpg';
import mobileImage from '../../../public/image-web-3-mobile.jpg';

export default function PrimaryContent({ slice }: HeroProps) {
    return (
        <section className="px-4 mt-4 max-w-full">
            <div className="flex flex-col desktop:flex-row desktop:flex-wrap desktop:mx-auto desktop:w-fit">
                <div className="desktop:mr-8 h-full">
                    <div>
                        <Image
                            src={mobileImage}
                            alt="Image"
                            layout="responsive"
                            className="desktop:hidden object-cover"
                        />
                        <Image
                            src={desktopImage}
                            alt="Image"
                            width={900}
                            className="mobile:hidden object-cover"
                        />
                    </div>

                    <div className="mt-8 mobile:mb-12 desktop:flex desktop:justify-between desktop:mt-9">
                        <div>
                            <PrismicRichText field={slice.primary.main_text} components={{
                                heading1: ({ children }) => <h1 className="text-very-dark-blue font-inter font-extrabold text-5xl mb-4 desktop:w-96 desktop:text-7xl desktop:m-0">{children}</h1>
                            }} />
                        </div>

                        <div className="desktop:flex desktop:flex-col desktop:max-w-[430px]">
                            <PrismicRichText field={slice.primary.paragraph} components={{
                                paragraph: ({ children }) => <p className="font-inter font-normal text-dark-grayish-blue text-paragraph leading-7 mb-6 desktop:text-lg desktop:w-[420px] desktop:pr-5 desktop:leading-8">{children}</p>
                            }} />
                        
                            <PrismicNextLink field={slice.primary.button}
                                className="bg-soft-red text-very-dark-blue font-bold flex items-center justify-center text-base desktop:text-lg tracking-2 hover:text-off-white hover:bg-very-dark-blue w-44 py-4 desktop:w-56 desktop:mt-auto">{slice.primary.button_text}</PrismicNextLink>
                        </div>
                    </div>
                </div>


                <aside className="bg-very-dark-blue p-6 desktop:w-[400px]">
                    <div className="desktop:mt-2">
                        <PrismicRichText field={slice.primary.heading} components={{
                            heading1: ({ children }) => <h1 className="font-inter font-extrabold text-soft-orange text-4xl desktop:text-5xl">{children}</h1>
                        }} />
                    </div>


                    <ul className="flex flex-col">
                        {slice.primary.news.map((item, index) => (
                            <li key={index} className="flex flex-col">
                                <div className="my-8 desktop:mt-10" >
                                    <PrismicRichText field={item.title} components={{
                                        heading2: ({ children }) => <h2 className="font-inter text-off-white font-bold text-xl desktop:text-2xl hover:text-soft-orange cursor-pointer mb-2 desktop:mb-3">{children}</h2>
                                    }} />
                                    <PrismicRichText field={item.description} components={{
                                        paragraph: ({ children }) => <p className="font-inter text-grayish-blue text-sm desktop:text-lg leading-7 ">{children}</p>
                                    }} />
                                </div>

                                {index !== slice.primary.news.length - 1 && (
                                    <span className="border-b border-dark-grayish-blue"></span>
                                )}
                            </li>
                        ))}
                    </ul>
                </aside>
            </div>
        </section>
    );
}
