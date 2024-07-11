import { HeroProps } from "@/slices/Hero";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

export default function PrimaryContent({ slice }: HeroProps) {
    return (
        <section className="w-full h-full p-4 grid place-items-center">
            <div className="grid w-full desktop:w-3/4 ">
                <div className="flex flex-col desktop:flex-row">
                    <div className="flex flex-col w-full ">
                        <PrismicNextImage field={slice.primary.image} className="w-full object-contain"/>
                      
                        <div className="flex flex-col w-full pt-8 desktop:flex-row">
                            <div className="w-full ">
                                <PrismicRichText field={slice.primary.main_text} components={{
                                    heading1: ({ children }) => <h1 className="text-veryDarkBlue font-inter font-bold text-5xl desktop:text-7xl desktop:w-96">{children}</h1>
                                }} />
                            </div>
                            <div className="w-full mobile:mt-5 grid">
                                <PrismicRichText field={slice.primary.paragraph} components={{
                                    paragraph: ({ children }) => <p className="font-inter text-darkGrayishBlue text-base desktop:text-xl leading-8">{children}</p>
                                }} />
                                <PrismicNextLink field={slice.primary.button}
                                    className="bg-softRed text-veryDarkBlue font-bold py-3 mt-7 flex items-center justify-center text-xl tracking-2 hover:text-offWhite hover:bg-veryDarkBlue w-2/3">{slice.primary.button_text}</PrismicNextLink>
                            </div>
                        </div>
                    </div>

                    {/* news */}
                    <aside className="grid grid-cols-1 gap-8 bg-veryDarkBlue mt-14 ml-0 desktop:mt-0 desktop:ml-10 p-6 desktop:p-8 w-full desktop:w-1/2 ">
                        <div className="">
                            <PrismicRichText field={slice.primary.heading} components={{
                                heading1: ({ children }) => <h1 className="font-inter font-bold text-softOrange text-4xl desktop:text-5xl">{children}</h1>
                            }} />
                        </div>
                        <ul className="flex flex-col">
                            {slice.primary.news.map((item, index) => (
                                <li key={index} className="flex flex-col py-5 max-h-full">
                                    <PrismicRichText field={item.title} components={{
                                        heading2: ({ children }) => <h2 className="text-offWhite font-bold text-xl desktop:text-3xl mb-2 hover:text-softOrange cursor-pointer">{children}</h2>
                                    }} />
                                    <PrismicRichText field={item.description} components={{
                                        paragraph: ({ children }) => <p className="text-grayishBlue text-base desktop:text-xl">{children}</p>
                                    }} />
                                    {index !== slice.primary.news.length - 1 && (
                                        <span className="mt-8 border-b border-darkGrayishBlue"></span>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </aside>
                </div>
            </div>
        </section>
    );
}
