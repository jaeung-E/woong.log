import PostItem from "@components/PostItem";
import type { CollectionEntry } from "astro:content";

interface Props {
  posts: CollectionEntry<"post">[];
}

function PostList({ posts }: Props) {
  return (
    <div className="divide-y divide-solid divide-slate-300 mt-12">
      {posts.map((post) => (
        <PostItem post={post} key={post.data.id} />
      ))}
    </div>
  );
}

export default PostList;
