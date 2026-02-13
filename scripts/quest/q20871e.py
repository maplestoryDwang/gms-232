# WA - End of Knight-in-Training - Start
sm.setSpeakerID(1101002)
if sm.sendAskYesNo("#t4032096#全部带来啦……很好。你具备了成为正式骑士的资格。你想踏上正式骑士之路吗？"):
    if sm.canHold(1142067):
        sm.setJob(1110)
        sm.addSP(3)
        sm.giveItem(1142067)
        sm.completeQuest(parentID)
    else :
        sm.sendSay("现在你已不再是修炼骑士。你已经成为了冒险骑士团的正式骑士。")
else:
    sm.sendSay("我给了你一些#bSP#k，并传授了你魂骑士技能中只有正式骑士才能学习的几种技能。希望你能和灵魂一起变得更强。")
