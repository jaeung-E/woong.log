import PostItem from "@components/PostItem";
import type { CollectionEntry } from "astro:content";

interface Props {
  posts: CollectionEntry<"post">[];
}

function PostList({ posts }: Props) {
  return (
    <div className="divide-y divide-solid divide-black">
      {posts.map((post) => (
        <PostItem post={post} />
      ))}
    </div>
  );
}

export default PostList;
