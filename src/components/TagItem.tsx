interface Props {
  name: string;
  isSelected?: boolean;
  isActivate?: boolean;
}

function TagItem({ name, isSelected = false, isActivate = false }: Props) {
  return (
    <div>
      {isActivate ? (
        <a href={`/tags/${name}`}>
          <div
            className={`inline rounded-full text-sm p-1 border-solid border-black border${
              isSelected ? " bg-green-400" : ""
            }${
              isActivate
                ? " hover:bg-slate-100 transition-colors duration-300"
                : ""
            }`}
          >
            <span>{name}</span>
          </div>
        </a>
      ) : (
        <div className="cursor-default inline rounded-full text-sm p-1 border-solid border-black border">
          <span>{name}</span>
        </div>
      )}
    </div>
  );
}

export default TagItem;
