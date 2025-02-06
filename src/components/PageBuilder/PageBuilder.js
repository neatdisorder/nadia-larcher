import Hero from "@/components/Blocks/Hero/Hero";
import Heading from "@/components/Blocks/Heading/Heading";
import Text from "@/components/Blocks/Text/Text";
import AutomaticAlbums from "../Blocks/AutomaticAlbums/AutomaticAlbums";
import TopSeparator from "../Blocks/TopSeparator/TopSeparator";

export default function PageBuilder({ content }) {
  const blocks = {
    hero_block: Hero,
    heading_block: Heading,
    text_block: Text,
    automatic_albums_block: AutomaticAlbums,
  };

  return (
    <>
      {content[0].type === "hero_block" || <TopSeparator />}
      {content.map((content, key) => {
        if (content.type in blocks) {
          const Block = blocks[content.type];
          return <Block key={key} content={content} />;
        }
      })}
    </>
  );
}
