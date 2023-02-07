import type { CollectionEntry } from "astro:content";

interface Props {
  post: CollectionEntry<"post">;
}

function PostItem({ post }: Props) {
  const { slug } = post;
  const { title, description, thumbnail } = post.data;

  return (
    <div className="py-4">
      <a href={`/posts/${slug}`}>
        <div className="grid grid-cols-12">
          <h1 className="col-span-9">{title}</h1>
          <div className="col-span-9">
            <p>{description}</p>
          </div>
          <div className="col-span-3 col-start-10 row-start-1 row-end-3">
            <img
              src={`${thumbnail}`}
              alt="thumbnail"
              className="object-cover h-24"
            />
          </div>
        </div>
      </a>
    </div>
  );
}

export default PostItem;
