import apiGet from "@/lib/apiGet";
import Menu from "@/components/Menu/Menu";
import Footer from "@/components/Footer/Footer";
import PageBuilder from "@/components/PageBuilder/PageBuilder";

export async function generateMetadata({ params }) {
  const { locale } = await params;

  const data = await apiGet({
    locale: locale,
    slug: "homepage",
  });

  return {
    title: data.title,
    description: "",
  };
}

export default async function Home({ params }) {
  const { locale } = await params;

  const data = await apiGet({
    locale: locale,
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
