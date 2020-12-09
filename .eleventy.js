const htmlmin = require("html-minifier");

module.exports = (eleventyConfig) => {
  eleventyConfig.addFilter("markdownify", (markdownString) => {
    const MarkdownIt = require("markdown-it");
    const md = new MarkdownIt({
      html: true,
      linkify: true,
      typographer: true,
    });

    return md.render(markdownString);
  });
  eleventyConfig.addFilter("randomize", (array) => {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  });
  eleventyConfig.addFilter("alphabetize", (array) => {
    array.sort((a, b) => a.data.name.localeCompare(b.data.name));
    return array;
  });
  eleventyConfig.addFilter("onlyOdd", (array) => {
    let newArray = [];
    for (var i = 0; i < array.length; i += 2) {
      newArray.push(array[i]);
    }
    return newArray;
  });
  eleventyConfig.addFilter("onlyEven", (array) => {
    let newArray = [];
    for (var i = 1; i < array.length; i += 2) {
      newArray.push(array[i]);
    }
    return newArray;
  });

  // Minify our HTML
  eleventyConfig.addTransform("htmlmin", (content, outputPath) => {
    if (outputPath.endsWith(".html")) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });
      return minified;
    }
    return content;
  });

  // Layout aliases
  eleventyConfig.addLayoutAlias("default", "layouts/default.njk");

  // Include our static assets
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("admin");

  return {
    templateFormats: ["md", "njk"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    passthroughFileCopy: true,

    dir: {
      input: "site",
      output: "dist",
      includes: "includes",
      data: "data",
    },
  };
};
