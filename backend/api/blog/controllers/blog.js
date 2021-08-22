"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async find(ctx) {
    let blogs = await strapi.services.blog.find(ctx.query);

    blogs = blogs.map((blog) => {
      return {
        id: blog.id,
        title: blog.title,
        slug: blog.slug,
        excerpt: blog.excerpt,
        created_at: blog.created_at,
        cover_image: blog.cover_image,
        created_by: blog.created_by,
        categories: blog.categories.map((category) => {
          return {
            id: category.id,
            name: category.name,
          };
        }),
      };
    });

    return blogs;
  },
};
