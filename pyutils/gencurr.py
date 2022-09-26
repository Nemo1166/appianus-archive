import json

curr = []

with open("./pyutils/curr.txt","r",encoding="utf-8") as f:
  lines = f.readlines()
  for line in lines:
    item = line.split(" ")
    curr.append({
      "name":item[0],
      "icon":item[1][:-1]
    })

with open("./docs/.vuepress/components/currency.json","w",encoding="utf-8") as o:
  o.write(json.dumps(curr,ensure_ascii=False))