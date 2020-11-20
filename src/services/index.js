const fs = require("fs");
const readline = require("readline");

// TODO: Split chapter 1 into chapter 0 and 1.
const readMD = () => {
  const data = fs.readFileSync("./docs/dev.md", "utf-8");

  let chapters = {};
  let index = 1;

  const lines = data.split("\n");

  lines.forEach((line) => {
    if (line.startsWith(`## ${index + 1}. `)) {
      index += 1;
    }

    if (chapters[index]) {
      chapters[index].push(line);
    } else {
      chapters[index] = [line];
    }
  });

  return chapters;
};

const splitMDIntoChapterFiles = (chapter, chapterNum) => {


  if (chapterNum === '1') {

    // Get index of Chapter one start
    let chapterOneTitle = "";
    let chapterOneTitleNoNumber = "";
    let chapterOneTitleClean = "";
    let indexOfChapterOne = 0;

    chapter.forEach((line, index) => {
      if (line.startsWith(`## ${chapterNum}. `)) {
        chapterOneTitle = line.split("##")[1].trim();
        chapterOneTitleNoNumber = chapterOneTitle
          .replace(`${chapterNum}.`, "")
          .replace("HLUTI", "")
          .trim();

        chapterOneTitleClean =
          chapterOneTitleNoNumber.charAt(0).toUpperCase() +
          chapterOneTitleNoNumber.slice(1).toLowerCase();

        indexOfChapterOne = index;
      }
    })

    // Split original chapter 1 into ToC and chapter 1
    const chapterZero = chapter.slice(0, indexOfChapterOne);
    const chapterOne = chapter.slice(indexOfChapterOne);

    // Headers
    let toc = `---\nid: efnisyfirlit\ntitle: Efnisyfirlit\nsidebar_label: Efnisyfirlit\nslug: /\nhide_title: true\nhide_table_of_contents: true\n---\n`;
    let md = `---\nid: kafli${chapterNum}\ntitle: ${chapterOneTitleClean.trim()}\nsidebar_label: ${chapterOneTitleClean.trim()}\nslug: /${chapterNum}\nhide_title: true\nhide_table_of_contents: true\n---\n\nimport useBaseUrl from '@docusaurus/useBaseUrl';\n\n<img alt="FLott hus" src={useBaseUrl('img/flotthus.png')} />\n\n`;
    
    

    // Add newlines after each line for both ToC and Chapter 1
    chapterZero.forEach((line) => {
      toc += line + "\n";
    })

    chapterOne.forEach((line) => {
      md += line + "\n";
    })

    // Write files.
    fs.writeFileSync(`./docs/efnisyfirlit.md`, toc, "utf8");
    fs.writeFileSync(`./docs/kafli${chapterNum}.md`, md, "utf8");
    
    
  } 
  else {

    let chapterTitle;
    let chapterTitleNoNumber = "";
    let chapterTitleClean = "";
    
    chapter.forEach((line) => {
      if (line.startsWith(`## ${chapterNum}. `)) {
        chapterTitle = line.split("##")[1].trim();
        chapterTitleNoNumber = chapterTitle.replace(`${chapterNum}.`, "").replace("HLUTI", "").trim();

        chapterTitleClean = chapterTitleNoNumber.charAt(0).toUpperCase() + chapterTitleNoNumber.slice(1).toLowerCase();
      }
    });

    let md = `---\nid: kafli${chapterNum}\ntitle: ${chapterTitleClean}\nsidebar_label: ${chapterTitleClean}\nslug: /${chapterNum}\nhide_title: true\nhide_table_of_contents: true\n---\n\nimport useBaseUrl from '@docusaurus/useBaseUrl';\n\n<img alt="FLott hus" src={useBaseUrl('img/flotthus.png')} />\n\n`;
    
    chapter.forEach((line) => {
      md += line + "\n";
    });
    
    fs.writeFileSync(`./docs/kafli${chapterNum}.md`, md, "utf8");
  }
};

const MDSplit = readMD();

Object.keys(MDSplit).forEach((key) => {
  splitMDIntoChapterFiles(MDSplit[key], key);
});
