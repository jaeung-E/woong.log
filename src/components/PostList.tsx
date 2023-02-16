import PostItem from "@components/PostItem";
import type { CollectionEntry } from "astro:content";

interface Props {
  posts: CollectionEntry<"post">[];
}

function PostList({ posts }: Props) {
  const sortedPosts = posts.sort(
    (a, b) =>
      new Date(b.data.createDate).getTime() -
      new Date(a.data.createDate).getTime()
  );

  return (
    <div className="max-md:px-4 divide-y divide-solid divide-slate-300 mt-12">
      {sortedPosts.map((post) => (
        <PostItem post={post} key={post.data.id} />
      ))}
    </div>
  );
}

export default PostList;
