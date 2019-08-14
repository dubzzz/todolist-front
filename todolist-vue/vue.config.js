module.exports = {
  publicPath:
    process.env.NODE_ENV === "production"
      ? "https://dubzzz.github.io/todolist-front/todolist-vue/"
      : "/"
};
