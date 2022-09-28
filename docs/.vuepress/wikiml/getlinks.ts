import * as fs from 'fs';
import * as path from 'path';

const dirPath = path.resolve(`${__dirname}`, '../../');

let temp: string[] = new Array();
function fileDisplay(filePath: string) {
  // 根据文件路径读取文件，返回一个文件列表
  const files = fs.readdirSync(filePath);
  // 遍历读取到的文件列表
  for (let filename of files) {
    // path.join得到当前文件的绝对路径
    const filepath = path.join(filePath, filename);
    // 根据文件路径获取文件信息
    const stats = fs.statSync(filepath);
    const isFile = stats.isFile(); // 是否为文件
    const isDir = stats.isDirectory(); // 是否为文件夹
    if (isFile) {
      temp.push(filepath);
    }
    if (isDir) {
      if (filepath.indexOf(".vuepress") == -1) {
        fileDisplay(filepath);
      }
    }
  };
}

fileDisplay(dirPath);

export var filemap:string[][] = new Array();

for (const file of temp) {
  let thispath = file.replace(dirPath, "").split("\\").join("/");
  let thisname = path.basename(thispath, ".md");
  if (thisname == "README") {
    thisname = path.basename(path.dirname(thispath));
    thispath = thispath.replace("README.md", "");
    if (thisname == "") {
      thisname = "首页"
    }
  } else {
    thispath = thispath.replace(".md", ".html");
  }
  filemap = filemap.concat([[thisname, thispath]])
}