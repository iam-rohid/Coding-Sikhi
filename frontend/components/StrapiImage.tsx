import React from "react";
import { getStrapiURL } from "../lib/api";
import { StrapiImageInterface } from "../models/strapi_image";

const StrapiImage = (props: {
  img: StrapiImageInterface;
  className?: string;
  format?: "large" | "medium" | "small" | "thumbnail";
}) => {
  const { img, className, format } = props;

  const getImage = (): any => {
    return format == "large"
      ? img.formats.large
      : format == "medium"
      ? img.formats.medium
      : format == "small"
      ? img.formats.small
      : format == "thumbnail"
      ? img.formats.thumbnail
      : img;
  };
  return (
    <img
      src={getStrapiURL(getImage().url)}
      alt={img.alternativeText || getImage().name}
      width={getImage().width}
      height={getImage().height}
      className={className}
    />
  );
};

export default StrapiImage;
