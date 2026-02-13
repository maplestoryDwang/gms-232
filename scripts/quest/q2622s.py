LADY_SYL = 1056000

sm.setSpeakerID(LADY_SYL)
if sm.sendAskAccept("你好像比以前强多了，#h0#。你不能总是使用和普通飞侠一样的技能。现在你必须踏上真正的双刀之路了。到#b飞花院#k来找我。我会让你看看什么是真正的双刀。\r\n#b#e（接受时，移动到飞花院雪姬的房间）#n#k"):
    sm.startQuest(parentID)
    sm.warp(103050101, 3)