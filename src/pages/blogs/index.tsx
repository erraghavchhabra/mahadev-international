import Head from "next/head";
import BlogsSection from "@/components/Home/BlogsSection";

export default function BlogsPage() {
  return (
    <>
      <Head>
        <title>Blogs</title>
        <meta name="description" content="Read our latest blogs and insights." />
      </Head>

      <main>
     
        <BlogsSection />
      </main>
    </>
  );
}