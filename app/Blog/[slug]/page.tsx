import React from "react";
import { blog } from "../BlogData";
import styles from "../Blog.module.css";

interface Props {
  params: Promise<{ slug: string }>;
}

const page = async ({ params }: Props) => {
  const { slug } = await params;
  const post = blog.find((post) => post.slug === slug);
  if (!post) {
    return <p>No post found!!</p>;
  }
  return (
    <div className={styles.blogPagewrapper}>
      Push to github first
      <div>
        <img
          src={post?.image}
          className={styles.react_to_next_cover_img}
          alt="react_to_next_cover"
        />
        <p>{post.text}</p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque maiores
        laboriosam at voluptatem, velit culpa.
      </div>
    </div>
  );
};

export default page;
