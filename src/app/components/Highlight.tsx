import { HighlightProps } from "@/slices/Highlight";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

export default function Highlight({ slice }: HighlightProps) {
    return (
        <section className="mt-10 desktop:mt-14">
            <ul className="flex flex-col desktop:flex-row mobile:px-4 desktop:mx-auto desktop:w-fit highlight">
                {slice.primary.group.map((item, index) => (
                    <li key={index} className="flex mobile:mb-8 desktop:mr-[120px] desktop:last:mr-0">
                        <div className="mr-4">
                            <PrismicNextImage field={item.icon} className="max-w-[100px] object-cover" alt=""/>
                        </div>

                        <div className="flex flex-col justify-between">
                            <PrismicRichText field={item.enum} components={{
                                heading1: ({ children }) => <h1 className="text-soft-red font-bold text-4xl">{children}</h1>
                            }} />
                            <h2 className="text-very-dark-blue font-extrabold text-[17px] hover:text-soft-red">{item.title}</h2>
                            <PrismicRichText field={item.description} components={{
                                paragraph: ({ children }) => <p className="text-dark-grayish-blue text-base max-w-[250px]">{children}</p>
                            }} />
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
}
