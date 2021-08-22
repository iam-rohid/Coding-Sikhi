import moment from "moment";
import React from "react";
import StrapiImage from "../../components/StrapiImage";
import { fetchAPI } from "../../lib/api";
import { BlogInterface } from "../../models/blog";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";

const BlogPage = (props: { blog: BlogInterface }) => {
  const { blog } = props;
  return (
    <div>
      <div className="w-full h-96 overflow-hidden" style={{ zIndex: -1 }}>
        <StrapiImage
          img={blog.cover_image}
          className="w-full h-full object-cover"
          format="large"
        />
      </div>
      <div className="w-full mx-auto p-10 max-w-4xl">
        <div className="mb-14">
          <h1 className="font-bold text-5xl mb-4 leading-snug">{blog.title}</h1>
          <ul className="flex flex-row items-center justify-start gap-2">
            {blog.categories.map((category) => (
              <li
                key={category.id}
                className="px-2 py-1 rounded bg-gray-100 dark:bg-gray-700 text-sm text-gray-500 dark:text-gray-300"
              >
                {category.name}
              </li>
            ))}
          </ul>
          <p className="text-gray-400 dark:text-gray-300 mt-4 text-sm">
            {moment(Date.parse(blog.created_at)).calendar()}
          </p>
        </div>
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          children={blog.body}
          className="prose"
        />
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  const blogs = await fetchAPI("/blogs");
  const paths = blogs.map((blog) => ({
    params: { slug: blog.slug },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const blogs = await fetchAPI(`/blogs?slug=${params.slug}`);
  const blog = await fetchAPI(`/blogs/${blogs[0].id}`);
  return { props: { blog: blog } };
}

export default BlogPage;
