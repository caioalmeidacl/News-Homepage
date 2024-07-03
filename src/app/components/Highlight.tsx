import { HighlightProps } from "@/slices/Highlight";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

export default function Highlight({ slice }: HighlightProps) {
    return (
        <section className="flex w-9/12 mt-2 mx-auto py-10 px-6">
            {slice.primary.group.map((item, index) => (
                <div key={index} className="flex mx-auto ">
                    <PrismicNextImage field={item.icon} width={105} height={105} />
                    <div className="flex flex-col justify-between h-full w-72 px-4 ">
                        <PrismicRichText field={item.enum} components={{
                            heading1: ({children}) => <h1 className="text-softRed font-bold text-4xl">{children}</h1>
                        }}/>
                        <h2 className="text-veryDarkBlue font-bold text-lg hover:text-softRed">{item.title}</h2>
                        <PrismicRichText field={item.description} components={{
                            paragraph: ({children}) => <p className="w-60 text-darkGrayishBlue text-base">{children}</p>
                        }}/>    
                    </div>
                </div>
            ))}
        </section>
    );
}