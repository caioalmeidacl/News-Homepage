import { HeroProps } from "@/slices/Hero";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";




export default function PrimaryContent({ slice }: HeroProps) {
    return (
        <section className="w-9/12 max-w-full mx-auto max-h-full">
            <div className="flex justify-evenly">
                <div className="flex flex-col max-w-6xl items-center ">
                    <PrismicNextImage field={slice.primary.image} width={850} height={400} />
                    <div className="flex justify-between m-10 w-full">
                        <PrismicRichText field={slice.primary.main_text} components={{
                            heading1: ({ children }) => <h1 className="font-inter font-bold text-7xl w-96">{children}</h1>
                        }} />

                        <div className="flex flex-col w-96 justify-between">
                            <PrismicRichText field={slice.primary.paragraph} components={{
                                paragraph: ({ children }) => <p className="font-inter text-darkGrayishBlue font-normal leading-8">{children}</p>
                            }} />
                            <PrismicNextLink field={slice.primary.button}
                                className="bg-softRed text-veryDarkBlue font-bold p-4 flex justify-center items-center max-w-48 text-xl tracking-widest">{slice.primary.button_text}</PrismicNextLink>
                        </div>
                    </div>
                </div>

                {/* news */}
                <aside className="bg-veryDarkBlue p-8 w-4/6 max-w-md h-full py-14">
                    <PrismicRichText field={slice.primary.heading} components={{
                        heading1: ({ children }) => <h1 className="font-inter font-bold text-softOrange text-5xl ">{children}</h1>
                    }} />
                    <ul className="flex flex-col">
                        {slice.primary.news.map((item, index) => (
                            <li key={index} className="flex flex-col pt-8">
                                <PrismicRichText field={item.title} components={{
                                    heading2: ({ children }) => <h2 className="text-offWhite font-bold text-2xl mb-2" >{children}</h2>
                                }} />
                                <PrismicRichText field={item.description} components={{
                                    paragraph: ({ children }) => <p className="text-grayishBlue text-xl">{children}</p>
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