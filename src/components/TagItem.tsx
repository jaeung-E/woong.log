import ConditionalLink from "./ConditionalLink";

interface Props {
  name: string;
  isSelected?: boolean;
  isActivate?: boolean;
}

function TagItem({ name, isSelected = false, isActivate = false }: Props) {
  return (
    <div>
      <ConditionalLink link={isActivate ? `/tags/${name}` : ""}>
        <div
          className={`inline rounded-full text-sm px-3 py-1 border-solid border-slate-400 border ${
            isSelected ? "bg-green-400" : ""
          } ${
            !isSelected && isActivate
              ? "hover:bg-slate-100 transition-colors duration-300"
              : ""
          }`}
        >
          <span className={`${isActivate ? "" : "cursor-default"}`}>
            {name}
          </span>
        </div>
      </ConditionalLink>
    </div>
  );
}

export default TagItem;
