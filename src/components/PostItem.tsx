import type { CollectionEntry } from "astro:content";

interface Props {
  post: CollectionEntry<"post">;
}

function PostItem({ post }: Props) {
  const { slug } = post;
  const { title, description, thumbnail } = post.data;

  return (
    <div className="py-4 transition-colors duration-300 hover:text-blue-400">
      <a href={`/posts/${slug}`}>
        <div className="grid grid-cols-12">
          <div className="col-span-3 col-start-1 row-start-1 row-end-3">
            <img
              src={`${thumbnail}`}
              alt="thumbnail"
              className="object-cover w-full h-full"
            />
          </div>
          <h1 className="col-span-9 col-start-5 text-2xl font-bold">{title}</h1>
          <div className="col-span-9 col-start-5 py-4">
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
