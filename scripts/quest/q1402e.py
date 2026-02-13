# 1402 - Magicians of Ellinia

sm.setSpeakerID(9000025) # Grendel the Really Old
response = sm.sendAskYesNo("哦，你来啦。很高兴能在这里见到你……你一定可以成为一名好魔法师。我马上就让你成为魔法师。")

if response:
    if sm.canHold(1372043):
        sm.jobAdvance(200) # Magician
        sm.setSTR(4)
        sm.setINT(4)
        sm.setDEX(4)
        sm.setLUK(4)
        sm.setAP(4 + chr.getLevel() * 5)
        sm.giveItem(1372043)
        sm.completeQuest(parentID)
        sm.sendSayOkay("冒险之书任务已完成。")
    else:
        sm.sendSayOkay("至此, 你已经能够使用各种魔法技能了。我给了你一些#bSP#k, 那就不妨打开#bSkill#k来学习自己想拥有的技能吧。最好学一些#b攻击魔法#k哦。")