import { createClient } from "@/prismicio";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";


export default async function Header() {
    let client = createClient();

    const settings = await client.getSingle("settings");

    return (
        <section className="flex justify-between items-center px-8 py-12 w-9/12 max-w-screen-2xl mx-auto text-center ">
            <div>
                <PrismicNextImage field={settings.data.logo} />
            </div>

            <nav>
                <ul className="flex text-center">
                    {settings.data.navigation.map(( { link, label } ) => (
                        <li key={label} className="mr-14">
                            <PrismicNextLink field={link} className="text-base">{label}</PrismicNextLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </section>
    );
}