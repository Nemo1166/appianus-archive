def genops():
  classes = ["先锋", "近卫", "术师", "狙击", "重装", "医疗", "辅助", "特种"]
  link_suffix = ".html"
  out = []
  currclass = "先锋"
  with open("./pyutils/classes.txt","r",encoding="utf-8") as f:
    lines = f.readlines()
    for line in lines:
      rec = line.split(sep=" ")
      if rec[0] in classes:
        currclass = rec[0]
        icon = rec[1][:-1].lower()
        out.append([rec[0],icon+'-s',"/干员/职业/"+rec[0]+link_suffix])
      else:
        icon = rec[1][:-1].lower()
        out.append([rec[0],icon,"/干员/职业/"+currclass+link_suffix+"#"+rec[0]])

    return out