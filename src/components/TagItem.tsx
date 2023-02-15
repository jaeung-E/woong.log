import type { MouseEvent } from "react";
import ConditionalLink from "@components/ConditionalLink";
import { ReactComponent as CloseIcon } from "@icon/close.svg";

interface Props {
  name: string;
  isSelected?: boolean;
  isActivate?: boolean;
}

function TagItem({ name, isSelected = false, isActivate = false }: Props) {
  const handleClick = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    location.replace("/");
  };

  return (
    <div>
      <ConditionalLink link={isActivate ? `/tags/${name}` : ""}>
        <div
          className={`flex rounded-full text-sm px-3 py-1 border-solid border-slate-400 border ${
            isSelected ? "bg-blue-100 dark:bg-blue-400" : ""
          } ${
            !isSelected && isActivate
              ? "hover:bg-slate-100 transition-colors duration-300 dark:hover:text-black"
              : ""
          }`}
        >
          <span className={`${isActivate ? "" : "cursor-default"}`}>
            {name}
          </span>
          {isSelected && (
            <button
              onClick={handleClick}
              className="ml-1 -mr-2 opacity-30 hover:opacity-100"
            >
              <CloseIcon />
            </button>
          )}
        </div>
      </ConditionalLink>
    </div>
  );
}

export default TagItem;
