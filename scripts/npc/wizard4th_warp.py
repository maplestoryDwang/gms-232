jobs = [211, 221, 231]
manon = 924000200
griff = 924000201

if chr.getJob() in jobs:
    str = "I can send you to Manon or Griffrey if you want. Where do you want to go?\r\n\r\n" \
          "#L0##rManon#l\r\n" \
          "#L1##bGriffrey#l\r\n" \
          "#L2##kNevermind#l\r\n"
    sel = sm.sendNext(str)
    if sel == 0:
        sm.warp(manon, 0, True)
    elif sel == 1:
        sm.warp(griff, 0, True)
else:
    sm.sendNext("Be smart, hero.")