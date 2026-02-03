import { HeroParallax } from "@/components/TOOTHome/hero-parallax";
import HomeContent from "@/components/TOOTHome/HomeContent";

const products = [
  {
    title: "",
    link: "#",
    thumbnail: "https://i.ibb.co.com/9HcsK0nP/image.png",
  },
  {
    title: "",
    link: "#",
    thumbnail: "https://i.ibb.co.com/TBF0GQXg/image.png",
  },
  {
    title: "",
    link: "#",
    thumbnail: "https://i.ibb.co.com/q3rtYhyk/image.png",
  },
  {
    title: "",
    link: "#",
    thumbnail: "https://i.ibb.co.com/7t0vbtPR/image.png",
  },
  {
    title: "",
    link: "#",
    thumbnail: "https://i.ibb.co.com/4gRrmdVP/image.png",
  },
  {
    title: "",
    link: "#",
    thumbnail: "https://i.ibb.co.com/3mqqhgwp/image.png",
  },
  {
    title: "",
    link: "#",
    thumbnail: "https://i.ibb.co.com/ymRztgyf/image.png",
  },
  {
    title: "",
    link: "#",
    thumbnail: "https://i.ibb.co.com/XrB6K3wj/image.png",
  },
  {
    title: "",
    link: "#",
    thumbnail: "https://i.ibb.co.com/VGP9mWb/image.png",
  },
  {
    title: "",
    link: "#",
    thumbnail: "https://i.ibb.co.com/PZm92tGr/image.png",
  },
  {
    title: "",
    link: "#",
    thumbnail: "https://i.ibb.co.com/cXDsqxvm/image.png",
  },
  {
    title: "",
    link: "#",
    thumbnail: "https://i.ibb.co.com/WWJJ4tpL/image.png",
  },
  {
    title: "",
    link: "#",
    thumbnail: "https://i.ibb.co.com/VczCgd7p/image.png",
  },
  {
    title: "",
    link: "#",
    thumbnail: "https://i.ibb.co.com/60tVJ2zw/image.png",
  },
  {
    title: "",
    link: "#",
    thumbnail: "https://i.ibb.co.com/d0RNdnDQ/image.png",
  },
  {
    title: "",
    link: "#",
    thumbnail: "https://i.ibb.co.com/SDqMRcD8/image.png",
  },
  {
    title: "",
    link: "#",
    thumbnail: "https://i.ibb.co.com/Z6X3j22X/image.png",
  },
  {
    title: "",
    link: "#",
    thumbnail: "https://i.ibb.co.com/ymRztgyf/image.png",
  },
];

export default function HomePageDesign() {
  return (
    <main>
      <HeroParallax products={products} />
      <HomeContent />
    </main>
  );
}