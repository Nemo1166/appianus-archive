import json
import os
import re

docs_dir = "./docs"

target_dir = "./docs/.vuepress/components"



def lfs(rootdir):
    _files = []
	# 列出文件夹下所有的文件
    list = os.listdir(rootdir)
    for i in range(0, len(list)):
		# 构造路径
        path = os.path.join(rootdir, list[i])
        if '.vuepress' in path:
            continue
		# 判断路径是否为文件目录或者文件
		# 如果是目录则继续递归
        if os.path.isdir(path):
            _files.extend(lfs(path))
        if os.path.isfile(path):
            _files.append(path)
    return _files

files = lfs(docs_dir)

links = []

for i in range(len(files)):
    files[i] = re.sub(r"\\",r"/",files[i])
    fname = files[i].split(sep="/")[-1][:-3]
    if fname == "README":
        item = {
            "name":files[i].split(sep="/")[-2],
            "link":files[i][6:-9]
        }
        links.append(item)
    else:
        item = {
            "name":fname,
            "link":files[i][6:-3]+".html"
        }
        links.append(item)

with open(os.path.join(target_dir,"links.json"),'w',encoding='utf-8') as f:
    f.write(json.dumps(links,ensure_ascii=False))