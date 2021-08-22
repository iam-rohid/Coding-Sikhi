import React from "react";
import { BlogInterface } from "../models/blog";
import StrapiImage from "./StrapiImage";
import Link from "next/link";
import { ArrowSmRightIcon } from "@heroicons/react/outline";
import { getLimitedString } from "../utility";
const BlogCard = (props: { blog: BlogInterface }) => {
  const { blog } = props;
  return (
    <div className="group w-full">
      <div className="thumbnail rounded-xl group-hover:shadow-xl transition ease-in-out duration-300">
        <StrapiImage img={blog.cover_image} format="small" />
      </div>
      <h1 className="text-xl mt-4 mb-2 font-semibold">
        {getLimitedString(blog.title, 60)}
      </h1>
      <p className="text-sm font-light text-gray-600">
        {getLimitedString(blog.excerpt, 100)}
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
