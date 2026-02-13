# NW - End of Knight-in-Training - Complete

sm.setSpeakerID(1101006)
response = sm.sendAskYesNo("#t4032099#全部带来啦……不过，就这点小事还不值得我称赞。我确认你拥有成为正式骑士的资格。你愿意成为正式骑士吗？")

if response:
    sm.completeQuest(parentID)
    sm.jobAdvance(1410)
    sm.giveItem(1142067)
    sm.sendSayOkay("现在你已不再是修炼骑士了。你已经成为了冒险骑士团的正式骑士。")
else:
    sm.sendSayOkay("我给了你一些#bSP#k。虽然不多，但可以用来学习新传授的技能。你可以和黑暗一起，试验一下夜行者技能中只有正式骑士才能学习的那些技能。")
