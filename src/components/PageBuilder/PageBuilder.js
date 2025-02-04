import Hero from "@/components/Blocks/Hero/Hero";
import Heading from "@/components/Blocks/Heading/Heading";
import Text from "@/components/Blocks/Text/Text";

export default function PageBuilder({ content }) {
  const blocks = {
    hero_block: Hero,
    heading_block: Heading,
    text_block: Text,
  };

  return (
    <>
      {content.map((content, key) => {
        if (content.type in blocks) {
          const Block = blocks[content.type];
          return <Block key={key} content={content} />;
        }
      })}
    </>
  );
}
