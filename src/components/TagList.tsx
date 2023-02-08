import TagItem from "./TagItem";

interface Props {
  tags: string[];
  isActivate?: boolean;
}

function TagList({ tags, isActivate = false }: Props) {
  return (
    <div>
      {tags.map((tag) => (
        <TagItem name={tag} isActivate={isActivate} />
      ))}
    </div>
  );
}

export default TagList;
