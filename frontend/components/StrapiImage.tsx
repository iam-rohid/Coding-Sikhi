import React from "react";
import { getStrapiURL } from "../lib/api";

const StrapiImage = (props: {
  img: any;
  className?: string;
  format?: "large" | "medium" | "small" | "thumbnail";
}) => {
  const getImage = (): any => {
    return props.format == "large"
      ? props.img.formats.large
      : props.format == "medium"
      ? props.img.formats.medium
      : props.format == "small"
      ? props.img.formats.small
      : props.format == "thumbnail"
      ? props.img.formats.thumbnail
      : props.img;
  };
  return (
    <img
      src={getStrapiURL(getImage().url)}
      alt={props.img.alternativeText || getImage().name}
      width={getImage().width}
      height={getImage().height}
      className={props.className}
    />
  );
};

export default StrapiImage;
