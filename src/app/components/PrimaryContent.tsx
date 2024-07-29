import { HeroProps } from "@/slices/Hero";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import Image from "next/image";
import desktopImage from '../../../public/image-web-3-desktop.jpg';
import mobileImage from '../../../public/image-web-3-mobile.jpg';

export default function PrimaryContent({ slice }: HeroProps) {
    return (
        <section className="px-4 mt-4">
            <div className="flex flex-col">
                <div>
                    <Image
                        src={mobileImage}
                        alt="Image"
                        className="object-cover"
                    />
                </div>

                <div className="mt-8 mb-12">
                    <PrismicRichText field={slice.primary.main_text} components={{
                        heading1: ({ children }) => <h1 className="text-very-dark-blue font-inter font-extrabold text-5xl mb-4 w-11/12">{children}</h1>
                    }} />
                    <PrismicRichText field={slice.primary.paragraph} components={{
                        paragraph: ({ children }) => <p className="font-inter font-normal text-dark-grayish-blue text-paragraph leading-7 mb-6">{children}</p>
                    }} />
                    <PrismicNextLink field={slice.primary.button}
                        className="bg-soft-red text-very-dark-blue font-bold flex items-center justify-center text-base tracking-2 hover:text-off-white hover:bg-very-dark-blue w-44 py-4">{slice.primary.button_text}</PrismicNextLink>
                </div>


                <aside className="bg-very-dark-blue p-6 ">
                    <div>
                        <PrismicRichText field={slice.primary.heading} components={{
                            heading1: ({ children }) => <h1 className="font-inter font-extrabold text-soft-orange text-4xl">{children}</h1>
                        }} />
                    </div>


                    <ul className="flex flex-col">
                        {slice.primary.news.map((item, index) => (
                            <li key={index} className="flex flex-col">
                                <div className="my-8" >
                                    <PrismicRichText field={item.title} components={{
                                        heading2: ({ children }) => <h2 className="font-inter text-off-white font-bold text-xl hover:text-soft-orange cursor-pointer mb-2">{children}</h2>
                                    }} />
                                    <PrismicRichText field={item.description} components={{
                                        paragraph: ({ children }) => <p className="font-inter text-grayish-blue text-sm leading-7">{children}</p>
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
