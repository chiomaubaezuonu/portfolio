import React from "react";
import { blog } from "../BlogData";
import styles from "../Blog.module.css";
import { subtle } from "crypto";
import Image from "next/image";
import Link from "next/link";
import Button from "@/app/components/button/Button";

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
      <div>
        {/* <img
          src={post?.image}
          className={styles.react_to_next_cover_img}
          alt="react_to_next_cover"
        /> */}
        <Image
          src={post.image}
          alt="React to Next.js migration"
          width={1200}
          height={600}
          className={styles.coverImage}
        />
        <main>
          <h1 className={styles.blogPageTitle}>{post.title}</h1>

          <div className={styles.mobileDetails}>
            <span>Oct 16 2024</span>
            <span className={styles.dot}></span>
            <span>5 minutes read</span>
            <span className={styles.dot}></span>
            <span>Chioma Ubaezuonu</span>
          </div>
          <div className={styles.postWrapper}>
            {post.excerpt?.map((excerpt) => (
              <p key={excerpt} className={styles.article}>
                {excerpt}
              </p>
            ))}

            {post.sections?.map((section, index) => (
              <div key={index}>
                <h3 className={styles.article_subtitle}>{section.title}</h3>
                <p className={styles.article}>
                  {section.contents?.map((content) => content)}
                </p>
              </div>
            ))}
            <Link
              href="mailto:chiomaubaezuonu102@gmail.com"
              className={styles.button_link}
            >
              <Button
                className={styles.getInTouchBtn}
                text="Get in touch"
                type="about_btn"
                image="/images/arrow-right-white.svg"
              />
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
};

export default page;
