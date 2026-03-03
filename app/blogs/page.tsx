import Link from "next/link";
import styles from "../blogs/Blog.module.css";
import { blog } from "./BlogData";

interface BlogCard {
  image: string;
  title: string;
  text: string;
  link: string;
}

const Blog = () => {
  return (
    <div className={styles.container}>
      <div className={styles.blogSection}>
        <h2 className={styles.title}>
          My <span className={styles.writings}>Writings</span>
        </h2>
        <span className={styles.subtitle}>
          My little corner of the web where I share my thoughts on topics around
          web development.
        </span>
      </div>
      <div className={styles.cardContainer}>
        {blog.map((blog) => {
          return (
           <Link key={blog.slug} href={`/blogs/${blog.slug}`} >
            <div className={styles.card}>
              <img src={blog.image} className={styles.blogImg} alt="" />
              <div className={styles.blogDetails}>
                <h3 className={styles.blogTitle}>{blog.title}</h3>
                <p className={styles.text}>{blog.excerpt}</p>
                <div className={styles.linkWrapper}>
                  <p className={styles.linkText}>{blog.link}</p>

                  <img src="/images/arrow-right.svg" alt="arrow-right" />
                </div>
              </div>
            </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
