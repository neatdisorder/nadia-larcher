import Hero from "@/components/Blocks/Hero/Hero";
import Heading from "@/components/Blocks/Heading/Heading";
import Text from "@/components/Blocks/Text/Text";
import AutomaticAlbums from "../Blocks/AutomaticAlbums/AutomaticAlbums";
import TopSeparator from "../Blocks/TopSeparator/TopSeparator";
import AutomaticVideos from "../Blocks/AutomaticVideos/AutomaticVideos";
import Contact from "../Blocks/Contact/Contact";
import AutomaticConcerts from "../Blocks/AutomaticConcerts/AutomaticConcerts";

export default function PageBuilder({ content }) {
  const blocks = {
    hero_block: Hero,
    heading_block: Heading,
    text_block: Text,
    automatic_albums_block: AutomaticAlbums,
    automatic_videos_block: AutomaticVideos,
    contact_block: Contact,
    automatic_concerts_block: AutomaticConcerts,
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
