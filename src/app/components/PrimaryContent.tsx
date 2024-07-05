import { HeroProps } from "@/slices/Hero";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

export default function PrimaryContent({ slice }: HeroProps) {
    return (
        <section className="max-w-full max-h-full p-2">
            <div className="flex flex-col desktop:flex-row desktop:w-4/5 justify-center mx-auto">
                <div className="flex flex-col desktop:flex-col flex-wrap w-full desktop:w-7/12 items-center">
                    <div className="max-w-full ">
                        <PrismicNextImage field={slice.primary.image} />
                    </div>
                    <div className="flex flex-col desktop:flex-row pt-4 w-full">
                        <div className="desktop:w-1/2 w-full pr-4">
                            <PrismicRichText field={slice.primary.main_text} components={{
                                heading1: ({ children }) => <h1 className="text-veryDarkBlue font-inter font-bold text-5xl desktop:text-6xl desktop:w-96">{children}</h1>
                            }} />
                        </div>
                        <div className="desktop:w-1/2 w-full mt-4 desktop:mt-0">
                            <PrismicRichText field={slice.primary.paragraph} components={{
                                paragraph: ({ children }) => <p className="font-inter desktop:pr-2 desktop:max-w-96 text-darkGrayishBlue text-base leading-8">{children}</p>
                            }} />
                            <PrismicNextLink field={slice.primary.button}
                                className="bg-softRed text-veryDarkBlue font-bold py-2 px-2 mt-4 flex justify-center text-lg tracking-2 hover:text-offWhite hover:bg-veryDarkBlue w-1/2">{slice.primary.button_text}</PrismicNextLink>
                        </div>
                    </div>
                </div>

                {/* news */}
                <aside className="bg-veryDarkBlue mt-14 ml-0 desktop:mt-0 desktop:ml-10 p-8 w-full desktop:w-1/4 ">
                    <PrismicRichText field={slice.primary.heading} components={{
                        heading1: ({ children }) => <h1 className="font-inter font-bold text-softOrange text-4xl desktop:text-5xl">{children}</h1>
                    }} />
                    <ul className="flex flex-col">
                        {slice.primary.news.map((item, index) => (
                            <li key={index} className="flex flex-col pt-10">
                                <PrismicRichText field={item.title} components={{
                                    heading2: ({ children }) => <h2 className="text-offWhite font-bold text-xl mb-2 hover:text-softOrange cursor-pointer">{children}</h2>
                                }} />
                                <PrismicRichText field={item.description} components={{
                                    paragraph: ({ children }) => <p className="text-grayishBlue text-base">{children}</p>
                                }} />
                                {index !== slice.primary.news.length - 1 && (
                                    <span className="mt-8 border-b border-darkGrayishBlue"></span>
                                )}
                            </li>
                        ))}
                    </ul>
                </aside>
            </div>
        </section>
    );
}
