module.exports = function(eleventyConfig) {
  // Passthrough copy for assets
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/blog/images");
  
  // Add permalink for CV page
  eleventyConfig.addCollection("cv", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/pages/cv.html");
  });
  
  // Date filter
  eleventyConfig.addFilter("date_ymd", function(value) {
    if (!value) return '';
    const date = new Date(value);
    return date.toISOString().slice(0, 10);
  });

  // Blog collection
  eleventyConfig.addCollection("blogPosts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/blog/*.md")
      .filter(post => !post.data.draft && !post.inputPath.endsWith('src/blog/index.md'));
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      layouts: "_includes/layouts",
      data: "_data",
      output: "_site"
    },
    templateFormats: ["njk", "md", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
};