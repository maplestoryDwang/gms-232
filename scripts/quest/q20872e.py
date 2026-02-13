# BW - End of Knight-in-Training - Complete

sm.setSpeakerID(1101004)
response = sm.sendAskYesNo("#t4032097#全都带来啦！真了不起！你具备了成为正式骑士的资格！你想踏上正式骑士之路吗？")

if response:
    sm.completeQuest(parentID)
    sm.jobAdvance(1210)
    sm.giveItem(1142067)
    sm.sendSayOkay("现在你已不再是修炼骑士。你已经成为了冒险骑士团的正式骑士！")
else:
    sm.sendSayOkay("我给了你一些#bSP#k，并传授了你炎术士技能中只有正式骑士才能学习的几种技能。希望你能和火焰一起变得更强！")
