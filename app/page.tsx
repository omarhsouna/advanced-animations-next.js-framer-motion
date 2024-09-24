"use client";
import img1 from "./assets/images/img-1.jpg";
import img2 from "./assets/images/img-2.jpg";
import img3 from "./assets/images/img-3.jpg";
import img4 from "./assets/images/img-4.jpg";
import img5 from "./assets/images/img-5.jpg";
import Section from "./components/Section";

const images = [
  {
    id: 1,
    src: img1,
    title: "Image 1",
  },
  {
    id: 2,
    src: img2,
    title: "Image 2",
  },
  {
    id: 3,
    src: img3,
    title: "Image 3",
  },
  {
    id: 4,
    src: img4,
    title: "Image 4",
  },
  {
    id: 5,
    src: img5,
    title: "Image 5",
  },
];

export default function Home() {
  return (
    <>
      {images.map((image, index) => (
        <Section
          key={image.id}
          src={image.src}
          title={image.title}
          start={index * 1000}
          end={(index + 1) * 1000}
        />
      ))}
    </>
  );
}
