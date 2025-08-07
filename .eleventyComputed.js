module.exports = {
  eleventyComputed: {
    permalink: data => {
      if (data.page && data.page.inputPath && data.page.inputPath.startsWith('./blog/') && data.title) {
        return `/blog/${data.title.replace(/\s+/g, '-').replace(/[^a-zA-Z0-9\-]/g, '').toLowerCase()}/index.html`;
      }
      return null;
    },
  },
  tags: ["blogPosts"]
};