# TB - End of Knight-in-Training - Complete

sm.setSpeakerID(1101005)
response = sm.sendAskYesNo("#t4032100#都带来了？嘻嘻嘻！我就知道你一定能行。我确认你具备了成为正式骑士的资格！哈哈，你想成为正式骑士吗？")

if response and chr.getJob() == 1500:
    sm.setJob(1510)
    sm.addAP(5)
    sm.addSP(5)
    sm.completeQuest(parentID)
    sm.sendSayOkay("现在你已不再是修炼骑士了。你已经是冒险骑士团的正式骑士。")
else:
    sm.sendSayOkay("我给了你一些#bSP#k。你现在可以学习奇袭者技能中只有正式骑士才能学习的技能了。这些和闪电结合的强大技能，希望你好好使用。")