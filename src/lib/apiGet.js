export default async function apiGet({ locale, type, slug }) {
  try {
    let data;

    const res = await fetch(
      `https://nadialarcher.com/panel/api/${locale}/${type}/${slug}`,
      {
        cache: "no-store",
      }
    );

    data = await res.json();

    return data;
  } catch (error) {
    return error;
  }
}
