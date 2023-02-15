import type { CollectionEntry } from "astro:content";

interface Props {
  post: CollectionEntry<"post">;
}

function PostItem({ post }: Props) {
  const { slug } = post;
  const { title, description, thumbnail, createDate } = post.data;

  return (
    <div className="py-4 transition-colors duration-300 hover:text-blue-400 dark:bg-black">
      <a href={`/posts/${slug}`}>
        <div className="grid grid-cols-12">
          <div className="col-span-3 row-span-2">
            <img
              src={`${thumbnail}`}
              alt="thumbnail"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex items-end col-start-5 col-span-6">
            <h1 className="text-2xl font-bold">{title}</h1>
          </div>
          <div className="flex items-end justify-end col-span-2 pr-3">
            <span className="text-sm !text-gray-400">
              {createDate.toLocaleDateString("ko-KR")}
            </span>
          </div>
          <div className="col-start-5 col-span-9  py-4">
            <p className="break-words overflow-hidden h-12 !text-gray-400">
              {description}
            </p>
          </div>
        </div>
      </a>
    </div>
  );
}

export default PostItem;
