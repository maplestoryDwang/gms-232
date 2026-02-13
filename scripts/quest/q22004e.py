# 22004 |   Fixing the Fence (Evan intro)
sm.setSpeakerID(1013103)
sm.sendNext("哦，#t4032498#搜集到了吗？真了不起。我应该给你什么作为奖赏呢……对了，我有那个东西。\r\n\r\n#fUI/UIWindow2.img/QuestIcon/4/0# \r\n#i3010097# #t3010097#1个\r\n#i2022621# #t2022621#15个\r\n#i2022622# #t2022622#15个\r\n\r\n#fUI/UIWindow2.img/QuestIcon/8/0# 210 exp")
if sm.canHold(3010097):
    sm.giveItem(3010097)
    sm.giveExp(210)
    sm.completeQuest(parentID)
    sm.dispose()
else:
    sm.sendNext("好了，我用修理篱笆剩下的木板做了一把椅子。虽然不太好看，但却很结实。就给你用吧。")
    sm.dispose()