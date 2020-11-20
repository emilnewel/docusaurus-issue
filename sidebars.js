const fs = require("fs");

const getChapters = () => {
  let filenames = fs.readdirSync("./docs", (err, files) => {
    if (err) {
      console.error(err);
      return [];
    }
    return files;
  });

  const chapters = filenames.filter((file) => file.includes("kafli"));

  let ret = [];
  chapters.forEach((chapt) => {
    ret.push(chapt.split(".")[0]);
  });
  return ret;
};

const compareChapter = (a, b) => {
  first = a.split("kafli")[1];
  second = b.split("kafli")[1];

  if (parseInt(first) > parseInt(second)) {
    return 1;
  }

  if (parseInt(first) < parseInt(second)) {
    return -1;
  }

  return 0;
};

const reglugerd = getChapters();
const sortedChapters = reglugerd.sort((a, b) => compareChapter(a, b));

module.exports = {
  someSidebar: {
    Efnisyfirlit: sortedChapters,
    // Kafli1: [
    //   "Kafli1 Enginn undirkafli",
    //   {
    //     "Kaflli2 með undirkafla": ["undirfafli1", "undirkafli2", "undirkafli3"],
    //   },
    // ],
  },
};

