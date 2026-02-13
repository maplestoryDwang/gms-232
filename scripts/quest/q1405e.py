# 1405 - Pirates of the Nautilus
sm.setSpeakerID(10204)
response = sm.sendAskYesNo("终于能见面了，真是让人高兴啊……为什么这么惊讶？因为我看上去太年轻了？你可别看我这样，我的年纪可不小哦，所以别小看我。来吧，现在就去转职成为海盗吧。")

if response:
    if sm.canHold(1492000) and sm.canHold(2330000, 2000) and sm.canHold(1482000):
        sm.jobAdvance(500) # Pirate
        sm.setSTR(4)
        sm.setINT(4)
        sm.setDEX(4)
        sm.setLUK(4)
        sm.setAP(4 + chr.getLevel() * 5)
        sm.giveItem(1492000) # Pistol
        sm.giveItem(2330000, 2000) # Bullets
        sm.giveItem(1482000) # Knuckle
        sm.completeQuest(parentID)
        sm.sendSayOkay("冒险之书任务已完成。")
    else:
        sm.sendSayOkay("好了，现在你已经是海盗的一员了。你已经有了很多海盗技能，你可以打开技能窗看一看。我给了你一些SP，你可以用来提升技能。随着等级的升高，你可以使用更多的技能。努力修炼吧。")
sm.dispose()
