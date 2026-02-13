#   [Job Adv] (5th job)   5th Job : Call of the erdas

warpToFieldId = 270010111

sm.setSpeakerID(2140001)
sm.sendNext("经过漫长的旅程，你已经到达力量的巅峰…你在追求力量的同时，有没有迷失前进的方向呢？")
if sm.sendAskYesNo("说不定你不仅能活用你的力量，还能趁此机会变得更强。\r\n如果你有意向，请来时间神殿找我吧。\r\n\r\n#b(如果接受的话，将移动到时间神殿进行#e5次转职#n。)#k"):
    sm.startQuest(parentID)
    sm.addQRValue(parentID, "1")
    if field.getId() != warpToFieldId:
        sm.warp(warpToFieldId, 0)
