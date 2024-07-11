import { HighlightProps } from "@/slices/Highlight";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

export default function Highlight({ slice }: HighlightProps) {
    return (
        <section className="w-full h-full mobile:py-6">
            <div className="flex flex-col desktop:flex-row desktop:mx-auto desktop:justify-around desktop:w-4/5  px-4">
                {slice.primary.group.map((item, index) => (
                    <div key={index} className="flex mb-7 desktop:mb-0 ">
                        <PrismicNextImage field={item.icon} width={110} height={110} alt="" />
                        <div className="flex flex-col w-full px-4  ">
                            <PrismicRichText field={item.enum} components={{
                                heading1: ({children}) => <h1 className="text-softRed font-bold mb-3 text-4xl">{children}</h1>
                            }}/>
                            <h2 className="text-veryDarkBlue font-bold text-lg desktop:text-xl  mb-2 hover:text-softRed">{item.title}</h2>
                            <PrismicRichText field={item.description} components={{
                                paragraph: ({children}) => <p className="desktop:w-64 text-darkGrayishBlue text-base desktop:text-lg">{children}</p>
                            }}/>    
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}