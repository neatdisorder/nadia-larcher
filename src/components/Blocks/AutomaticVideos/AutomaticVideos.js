import styles from "./AutomaticVideos.module.scss";
import VerticalCard from "@/components/Cards/VerticalCard/VerticalCard";

export default function AutomaticVideos({ content }) {
  return (
    <div className={"block-outer-container"}>
      <div className={`block-inner-container ${styles.videosContainer}`}>
        {content.field_content.map((content, key) => {
          return (
            <VerticalCard
              key={key}
              content={{
                title: content.title,
                subtitle: `${content.field_year}`,
                description: content.field_description,
                image: content.field_image,
                embed: content.field_video_embed,
                link: content.field_link.uri
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
