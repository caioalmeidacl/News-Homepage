import PrimaryContent from "@/app/components/PrimaryContent";
import { Content } from "@prismicio/client";
import {  SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      
      <PrimaryContent slice={slice} index={0} slices={[]} context={undefined}/>
    </section>
  );
};

export default Hero;
