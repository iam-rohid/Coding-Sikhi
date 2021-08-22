import React from "react";
import { BlogInterface } from "../models/blog";
import StrapiImage from "./StrapiImage";
import Link from "next/link";
import { ArrowSmRightIcon } from "@heroicons/react/outline";
import { getLimitedString } from "../utility";
import { StrapiImageInterface } from "../models/strapi_image";

const BlogCard = (props: { blog: BlogInterface }) => {
  const { blog } = props;
  return (
    <div className="group w-full">
      <Link href={`/blogs/${blog.slug}`}>
        <a className="block thumbnail rounded-xl group-hover:shadow-xl transition ease-in-out duration-300">
          <StrapiImage
            img={blog.cover_image as StrapiImageInterface}
            format="small"
          />
        </a>
      </Link>

      <Link href={`/blogs/${blog.slug}`}>
        <a className="inline-block text-xl mt-4 mb-2 font-semibold hover:underline">
          {getLimitedString(blog.title, 80)}
        </a>
      </Link>
      <p className="text-sm font-light text-gray-600 dark:text-gray-300">
        {blog.excerpt
          ? getLimitedString(blog.excerpt, 120)
          : "No description for this blog"}
      </p>
      <Link href={`/blogs/${blog.slug}`}>
        <a className="flex flex-row items-center space-x-2 mt-4 text-purple-500">
          <span>Read More</span>
          <ArrowSmRightIcon className="w-5 h-5" />
        </a>
      </Link>
    </div>
  );
};

export default BlogCard;
