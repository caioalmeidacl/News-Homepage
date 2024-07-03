import { createClient } from "@/prismicio";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";


export default async function Header() {
    let client = createClient();

    const settings = await client.getSingle("settings");

    return (
        <section className="py-12 w-full">
            <div className="flex w-9/12 px-14 justify-between items-center mx-auto">
                <PrismicNextImage field={settings.data.logo} />
                <nav>
                    <ul className="flex">
                        {settings.data.navigation.map(( { link, label } ) => (
                            <li key={label} className="mr-8">
                                <PrismicNextLink field={link} className="text-base text-darkGrayishBlue hover:text-softRed">{label}</PrismicNextLink>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </section>
    );
}