import type { MouseEvent } from "react";
import ConditionalLink from "@components/ConditionalLink";

interface Props {
  name: string;
  isSelected?: boolean;
  isActivate?: boolean;
}

function TagItem({ name, isSelected = false, isActivate = false }: Props) {
  const handleClick = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    location.replace("/posts");
  };

  return (
    <div>
      <ConditionalLink link={isActivate ? `/tags/${name}` : ""}>
        <div
          className={`flex rounded-full text-sm px-3 py-1 border-solid border-slate-400 border ${
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
          {isSelected && (
            <button onClick={handleClick} className="ml-1 -mr-2">
              <img
                src="/assets/icon/close.svg"
                alt="close"
                className="opacity-30 hover:opacity-100"
              />
            </button>
          )}
        </div>
      </ConditionalLink>
    </div>
  );
}

export default TagItem;
