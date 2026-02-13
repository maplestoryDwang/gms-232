# 21400 - [Job Adv] (Lv.100)   Aran
sm.setSpeakerID(1510009)
if sm.sendAskYesNo("最近有没有好好修炼？虽然知道你很忙，不过还是请你回一趟#b#m140000000##k。#b#p1201002##k又出现了奇怪的反应……很奇怪，这次的反应和上次不一样，有点更深厚、更沉重……的感觉。"):
    sm.startQuest(parentID)
    sm.sendSayOkay("有种不祥的预感……请速速回去。虽然我从来没有见过#p1201002#，也没听过它的声音……不过我可以感觉到它的痛苦。只有#b#p1201002#的主人，你才能解决它的问题#k！")
    sm.dispose()
else:
    sm.dispose()