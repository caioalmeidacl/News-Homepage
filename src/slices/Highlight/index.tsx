import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Highlights from "@/app/components/Highlight";
/**
 * Props for `Highlight`.
 */
export type HighlightProps = SliceComponentProps<Content.HighlightSlice>;

/**
 * Component for "Highlight" Slices.
 */
const Highlight = ({ slice }: HighlightProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Highlights slice={slice} index={0} slices={[]} context={undefined} />
    </section>
  );
};

export default Highlight;
