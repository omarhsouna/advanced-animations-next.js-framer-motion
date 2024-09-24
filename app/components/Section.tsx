import React, { useEffect } from "react";
import { motion, useTransform, useScroll, useMotionValue } from "framer-motion";
import Image, { StaticImageData } from "next/image";
const generateClipPath = (
  start: number,
  end: number,
  scrollPosition: number
) => {
  if (scrollPosition >= start && scrollPosition < end) {
    const progress = (scrollPosition - start) / (end - start);
    const clipPathSize = Math.max(0, 1000 * progress);
    return clipPathSize;
  } else if (scrollPosition < start) {
    return 0;
  } else if (scrollPosition > end) {
    return 1000;
    // return "circle(1000px at center)";
  }

  return 0;
};
interface Props {
  src: StaticImageData;
  title: string;
  start: number;
  end: number;
}
const Section = ({ src, title, start, end }: Props) => {
  const { scrollY } = useScroll();
  const yValue = useMotionValue(0);

  // Update yValue as scrollY changes
  useEffect(() => {
    return scrollY.onChange((latest) => {
      yValue.set(generateClipPath(start, end, latest || 0)); // Update yValue to the current scroll position
    });
  }, [scrollY, yValue, start, end]);

  // Define your custom clip-path rules based on scroll position
  const clipPath = useTransform(yValue, () => {
    return `circle(${yValue.get()}px at center)`;
  });
  return (
    <motion.section
      className="fixed inset-0"
      style={{
        clipPath: clipPath,
        transition: "clip-path 0.5s ease-in-out",
      }}
    >
      <Image
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={src}
        alt={title}
      />
    </motion.section>
  );
};

export default Section;
