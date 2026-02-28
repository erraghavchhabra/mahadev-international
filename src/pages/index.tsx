import Head from "next/head";
import HeroSlider from "@/components/Home/HeroSlider";
import ProductsSection from "@/components/Home/ProductsSection";
import SolutionsSection from "@/components/Home/SolutionsSection";
import AlternatingSolutions from "@/components/Home/AlternatingSolutions";
import BlogsSection from "@/components/Home/BlogsSection";
export default function Home() {
  return (
    <>
      <Head>
        <title className="font-sans">Mahadev International</title>
        <meta name="description" content="Technology & Solutions Company" />
      </Head>

      {/* Hero Section */}

      <HeroSlider />
      <ProductsSection />
      <SolutionsSection />
      <AlternatingSolutions />
      <BlogsSection showViewAll />
    </>
  );
}
