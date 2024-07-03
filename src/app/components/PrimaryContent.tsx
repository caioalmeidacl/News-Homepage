import { HeroProps } from "@/slices/Hero";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

export default function PrimaryContent({ slice }: HeroProps) {
    return (
        <section className="max-w-full">
            <div className="flex w-4/5 justify-center  max-w-full mx-auto ">
                <div className="flex flex-col w-7/12">
                    <div className="max-w-full">
                        <PrismicNextImage field={slice.primary.image}/>
                    </div>
                    <div className="flex pt-4">
                        <PrismicRichText field={slice.primary.main_text} components={{
                            heading1: ({ children }) => <h1 className="text-veryDarkBlue font-inter font-bold text-6xl w-96">{children}</h1>
                        }} />

                        <div className="ml-auto">
                            <PrismicRichText field={slice.primary.paragraph} components={{
                                paragraph: ({ children }) => <p className="font-inter pr-2 w-96 text-darkGrayishBlue text-base leading-8">{children}</p>
                            }} />
                            <PrismicNextLink field={slice.primary.button}
                                className="bg-softRed text-veryDarkBlue font-bold p-2 mt-4 flex justify-center max-w-48 text-lg tracking-2 hover:text-offWhite hover:bg-veryDarkBlue">{slice.primary.button_text}</PrismicNextLink>
                        </div>
                    </div>
                </div>

                {/* news */}
                <aside className="bg-veryDarkBlue ml-10 p-8 w-3/12 min-h-full">
                    <PrismicRichText field={slice.primary.heading} components={{
                        heading1: ({ children }) => <h1 className="font-inter font-bold text-softOrange text-5xl ">{children}</h1>
                    }} />
                    <ul className="flex flex-col">
                        {slice.primary.news.map((item, index) => (
                            <li key={index} className="flex flex-col pt-10">
                                <PrismicRichText field={item.title} components={{
                                    heading2: ({ children }) => <h2 className="text-offWhite font-bold text-xl mb-2 hover:text-softOrange cursor-pointer" >{children}</h2>
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