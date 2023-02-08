import TagItem from "./TagItem";

interface Props {
  tags: string[];
  selectedTag?: string;
  isActivate?: boolean;
}

function TagList({ tags, selectedTag, isActivate = false }: Props) {
  return (
    <div className="flex flex-wrap justify-center gap-x-2 gap-y-4">
      {tags.map((tag) => (
        <TagItem
          name={tag}
          isSelected={selectedTag === tag}
          isActivate={isActivate}
        />
      ))}
    </div>
  );
}

export default TagList;
