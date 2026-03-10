import Head from "next/head";
import CaseStudiesSection from "@/components/CaseStudiesSection";

export default function BlogsPage() {
  return (
    <>
      <Head>
        <title>Case Studies</title>
        <meta name="description" content="Read our latest blogs and insights." />
      </Head>

      <main>
     
        <CaseStudiesSection />
      </main>
    </>
  );
}