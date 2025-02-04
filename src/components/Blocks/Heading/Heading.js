import styles from "@/components/Blocks/Heading/Heading.module.scss";

export default function Heading({ content }) {
  return (
    <div className={"block-outer-container"}>
      <div className={"block-inner-container"}>
        <h2>{content.field_title}</h2>
      </div>
    </div>
  );
}
