# 22002 |   Sandwich for Breakfast (Evan intro)
sm.setSpeakerID(1013101)
sm.sendNext("给#p1013102#喂过饭了吗？小不点你去吃早饭吧。今天的早饭是#t2022620#。我拿出来了，嘻嘻。事实上，如果你不去给#p1013102#喂食，我就不打算给你早饭吃。")
if sm.sendAskYesNo("来，给你#b三明治#k，#b吃完之后到妈妈那里去一趟#k。她好像有话要跟你说。"):
    if sm.canHold(2022620):
        sm.startQuest(parentID)
        sm.giveItem(2022620)
        sm.setPlayerAsSpeaker()
        sm.sendNext("#b(有话要跟我说？先把#t2022620#吃了，然后到屋里去看看吧。)#k")
        sm.dispose()
    else:
        sm.sendNext("Please make room in your Use inventory.")
        sm.dispose()
else:
    sm.dispose()

