import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import HeaderComponent from "../../app/components/Header";

/**
 * Props for `Header`.
 */
export type HeaderProps = SliceComponentProps<Content.HeaderSlice>;

/**
 * Component for "Header" Slices.
 */
const Header = ({ slice }: HeaderProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <HeaderComponent slice={slice} slices={[]} index={0} context={undefined}/>
    </section>
  );
};

export default Header;
