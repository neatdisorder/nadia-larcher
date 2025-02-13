import styles from "./AutomaticAlbums.module.scss";
import HorizontalCard from "@/components/Cards/HorizontalCard/HorizontalCard";

export default function AutomaticAlbums({ content }) {
  return (
    <div className={"block-outer-container"}>
      <div className={`block-inner-container ${styles.albumsContainer}`}>
        {content.field_content.map((content, key) => {
          return (
            <HorizontalCard
              key={key}
              content={{
                title: content.title,
                subtitle: `${content.field_artist} · ${content.field_year}`,
                description: content.field_description,
                image: content.field_image,
                embed: content.field_spotify_embed,
                links: content.field_links,
                modal: content.field_credits,
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
