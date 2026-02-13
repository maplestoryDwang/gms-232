LADY_SYL = 1056000

sm.setSpeakerID(LADY_SYL)
if sm.sendAskYesNo("太好了，慧眼选择了你。现在就来学双刀真正的技能吗？允许的话，我就让你觉醒为见习刀客。"):
    sm.jobAdvance(430)
    if chr.getJob() == 430:
        sm.completeQuest(parentID)
        sm.consumeItem(4032616)
        sm.giveItem(1342000)
        sm.sendNext("从现在开始，你就是#b#e见习刀客#n#k了。你应该为此感到自豪。")
else:
    sm.sendSayOkay("可以让你的力量更上一层楼的新装备已经发放给你了。希望你能好好使用。")