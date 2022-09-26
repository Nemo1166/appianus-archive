import json
from genops import genops

dmgs = [["物理", "dmg-phy", ""],
  ["法术", "dmg-art", ""]]

iconmap = dmgs+genops()

out = []

for item in iconmap:
  out.append({
    "name":item[0],
    "icon":item[1],
    "link":item[2]
  })

with open("./pyutils/iconmap.json","w",encoding="utf-8") as f:
  f.write(json.dumps(out,ensure_ascii=False))