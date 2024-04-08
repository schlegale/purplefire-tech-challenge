import Nav from "./components/nav";
import Details from "./components/details";
import Carousel from "./components/carousel";
import Footer from "./components/footer";
import data from "@/data.json";

interface Props {
  params: {
    name: string;
  };
}

export default function ProductDetail({ params }: Props) {
  const name = params.name.split("-").join(" ").toUpperCase();

  const currentProduct = data.products.find((product) => product.name?.toUpperCase() === name);
  const otherProducts = data.products.filter((product) => product.name?.toUpperCase() !== name);

  if (!currentProduct) {
    return <div>oops</div>;
  }

  return (
    <main className="text-center">
      <Nav />
      <div className="py-8 bg-gray-100">
        <h1 className="text-2xl font-bold">{name}</h1>
        <p className="text-sm tracking-wide uppercase">HOME / PRODUCT / {name}</p>
      </div>
      <Details data={currentProduct} />
      <Carousel data={otherProducts} />
      <Footer />
    </main>
  );
}
