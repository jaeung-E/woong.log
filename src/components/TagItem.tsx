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
          className={`inline rounded-full text-sm p-1 border-solid border-black border ${
            isSelected ? " bg-green-400" : ""
          } ${
            isActivate
              ? " hover:bg-slate-100 transition-colors duration-300"
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
