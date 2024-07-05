import { HighlightProps } from "@/slices/Highlight";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

export default function Highlight({ slice }: HighlightProps) {
    return (
        <section className="flex flex-col w-full px-2 desktop:w-9/12 mt-10 desktop:mt-0 desktop:mx-auto desktop:py-10 desktop:px-6 desktop:flex-row">
            {slice.primary.group.map((item, index) => (
                <div key={index} className="flex mx-auto mb-6 desktop:mb-0 ">
                    <PrismicNextImage field={item.icon} width={105} height={105} alt="" />
                    <div className="flex flex-col justify-between h-full w-full desktop:w-72 px-4 ">
                        <PrismicRichText field={item.enum} components={{
                            heading1: ({children}) => <h1 className="text-softRed font-bold text-4xl">{children}</h1>
                        }}/>
                        <h2 className="text-veryDarkBlue font-bold text-lg hover:text-softRed">{item.title}</h2>
                        <PrismicRichText field={item.description} components={{
                            paragraph: ({children}) => <p className="desktop:w-60 text-darkGrayishBlue text-base">{children}</p>
                        }}/>    
                    </div>
                </div>
            ))}
        </section>
    );
}