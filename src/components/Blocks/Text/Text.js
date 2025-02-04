import styles from "@/components/Blocks/Text/Text.module.scss";

export default function Text({ content }) {
  return (
    <div className={"block-outer-container"}>
      <div
        className={"block-inner-container"}
        dangerouslySetInnerHTML={{ __html: content.field_text }}
      />
    </div>
  );
}
