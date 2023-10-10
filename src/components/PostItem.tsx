import type { CollectionEntry } from "astro:content";

interface Props {
  post: CollectionEntry<"post">;
}

function PostItem({ post }: Props) {
  const { slug } = post;
  const { title, description, thumbnail, createDate } = post.data;

  return (
    <div className="py-4 transition-colors duration-300 hover:text-blue-400">
      <a href={`/posts/${slug}`}>
        <div className="grid grid-cols-12">
          <div className="max-md:h-72 col-span-12 md:col-span-3 md:row-span-2">
            <img
              src={`${thumbnail}`}
              alt="thumbnail"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="max-md:mt-10 col-span-12 md:col-start-5 md:col-span-8">
            <div className="flex items-end justify-between">
              <h1 className="text-4xl md:text-2xl font-bold">{title}</h1>
              <span className="text-sm !text-gray-400 md:pr-3 min-w-fit">
                {createDate.toLocaleDateString("ko-KR")}
              </span>
            </div>
          </div>
          <div className="col-span-12 md:col-start-5 md:col-span-9 py-4">
            <p className="break-words overflow-hidden h-24 md:h-12 !text-gray-400">
              {description}
            </p>
          </div>
        </div>
      </a>
    </div>
  );
}

export default PostItem;
