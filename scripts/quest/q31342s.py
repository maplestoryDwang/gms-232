# [Stone Colossus] Wanderin' the Colossus

CHINO = 2210004
TIME = 20

sm.setSpeakerID(CHINO)
sm.sendNext("好的，现在出发吗？乘坐升降机，可以沿着岩壁巨人的身体爬上去。他的身体非常巨大，爬上去需要一些时间。请做好充分的准备。")

response = sm.sendAskYesNo("也许会受到虫子的袭击。那种时候最好是使用枪。\r\n\r\n#r(枪可以通过鼠标点击使用。)#k")

if response:
    sm.warpInstanceIn(240091600)
    sm.startQuest(parentID)
    sm.setInstanceTime(TIME, 240092000)
else:
    sm.sendSayOkay("#fMob/9307006.img/fly/0# \r\n黄蜂冲过来的话，一定要毫不犹豫地把它们消灭掉。当然，时间和子弹是有限制的，一定要记住。")