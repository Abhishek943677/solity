
const importBlogPostsWithContent = async () => {
    // https://medium.com/@shawnstern/importing-multiple-markdown-files-into-a-react-component-with-webpack-7548559fce6f
    // second flag in require.context function is if subdirectories should be searched
    const markdownFiles = require
      .context("../content/blogPosts", false, /\.md$/)
      .keys()
      .map((relativePath) => relativePath.substring(2));
    return Promise.all(
      markdownFiles.map(async (path) => {
        const markdown = await import(`../content/blogPosts/${path}`);
        return { ...markdown, slug: path.substring(0, path.length - 3) };
      })
    );
  };
export default importBlogPostsWithContent;  