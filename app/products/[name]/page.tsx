import Nav from "./components/nav";
import Details from "./components/details";
import Carousel from "./components/carousel";
import Footer from "./components/footer";

interface Props {
  params: {
    name: string;
  };
}

export default function ProductDetail({ params }: Props) {
  const name = params.name.split("-").join(" ").toUpperCase();

  const products = [
    {
      label: "NEW",
      image: "/tv-1.png",
      name: "Sony BRAVIA XR Android Tv",
      price: "$800.22",
      originalPrice: "$1000.66",
      isFavorite: true,
    },
    {
      label: "-10%",
      image: "/tv-2.png",
      name: "Mi P1 Smart Android HD TV",
      price: "$400.00",
      isFavorite: false,
    },
    {
      label: "HOT",
      image: "/tv-3.png",
      name: "Konka OLED Android Tv",
      price: "$700.00",
      isFavorite: false,
    },
    {
      label: "2 Years Warranty",
      image: "/tv-4.png",
      name: "TCL Roku Android Tv",
      price: "$800.00",
      isFavorite: false,
    },
    {
      label: "NEW",
      image: "/tv-1.png",
      name: "Sony BRAVIA XR Android Tv",
      price: "$800.22",
      originalPrice: "$1000.66",
      isFavorite: true,
    },
    {
      label: "-10%",
      image: "/tv-2.png",
      name: "Mi P1 Smart Android HD TV",
      price: "$400.00",
      isFavorite: false,
    },
    {
      label: "HOT",
      image: "/tv-3.png",
      name: "Konka OLED Android Tv",
      price: "$700.00",
      isFavorite: false,
    },
    {
      label: "2 Years Warranty",
      image: "/tv-4.png",
      name: "TCL Roku Android Tv",
      price: "$800.00",
      isFavorite: false,
    },
  ];

  return (
    <main className="text-center">
      <Nav />
      <div className="py-8 bg-gray-100">
        <h1 className="text-2xl font-bold">{name}</h1>
        <p className="text-sm tracking-wide uppercase">HOME / PRODUCT / {name}</p>
      </div>
      <Details />
      <Carousel list={products} />
      <Footer />
    </main>
  );
}
