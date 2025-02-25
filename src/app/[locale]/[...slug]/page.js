import apiGet from "@/lib/apiGet";
import Menu from "@/components/Menu/Menu";
import Footer from "@/components/Footer/Footer";
import PageBuilder from "@/components/PageBuilder/PageBuilder";

export async function generateMetadata({ params }) {
  const { locale, slug } = await params;

  const data = await apiGet({
    locale: locale,
    slug: slug.join("/"),
  });

  return {
    title: data.title,
    description: "",
  };
}

export default async function Page({ params }) {
  const { locale, slug } = await params;

  const data = await apiGet({
    locale: locale,
    slug: slug.join("/"),
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
