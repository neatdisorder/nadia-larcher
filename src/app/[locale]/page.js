import apiGet from "@/lib/apiGet";
import Menu from "@/components/Menu/Menu";
import Footer from "@/components/Footer/Footer";
import PageBuilder from "@/components/PageBuilder/PageBuilder";
import "@/app/page.module.css";

export async function generateMetadata({ params: { locale } }) {
  const data = await apiGet({
    locale: locale,
    type: "page",
    slug: "homepage",
  });

  return {
    title: data.title,
    description: "",
  };
}

export default async function Home({ params: { locale } }) {
  const data = await apiGet({
    locale: locale,
    type: "page",
    slug: "homepage",
  });

  return (
    <>
      {data.menu && <Menu content={data.menu} />}
      <main>
        <PageBuilder content={data.field_content} />
      </main>
      {data.footer && <Footer content={data.footer} />}
    </>
  );
}
