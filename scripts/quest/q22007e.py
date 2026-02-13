# 22007 |   Collecting Eggs (Evan intro)
sm.setSpeakerID(1013101)
sm.sendNext("哦，#t4032451#拿来了吗？快把蛋给我吧。我来帮你把它孵化。")
if sm.sendAskYesNo("来，拿着。不知道这到底可以用来干什么……\r\n\r\n#fUI/UIWindow2.img/QuestIcon/8/0# 360 exp"):
    sm.giveExp(360)
    sm.completeQuest(parentID)
    sm.dispose()
else:
    sm.dispose()
