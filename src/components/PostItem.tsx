import type { CollectionEntry } from "astro:content";

interface Props {
  post: CollectionEntry<"post">;
}

function PostItem({ post }: Props) {
  const { slug } = post;
  const { title, description } = post.data;

  return (
    <div className="py-4">
      <a href={`/posts/${slug}`}>
        <div className="grid grid-cols-12">
          <h1 className="col-span-12 mb-4">{title}</h1>
          <div className="col-span-12">
            <p>{description}</p>
          </div>
        </div>
      </a>
    </div>
  );
}

export default PostItem;
