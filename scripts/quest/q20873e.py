# WA - End of Knight-in-Training - Complete

sm.setSpeakerID(1101005)
response = sm.sendAskYesNo("#t4032098#……已经全部确认。你具备了成为正式骑士的资格。你想踏上正式骑士之路吗？")

if response:
    sm.completeQuest(parentID)
    sm.jobAdvance(1310)
    sm.giveItem(1142067)
    sm.sendSayOkay("现在……你已经不再是修炼骑士。你已经成为了冒险骑士团的正式骑士。")
else:
    sm.sendSayOkay("我给了你#bSP#k。此外还传授了风灵使者技能中只有正式骑士才能学习的技能。希望你能和风一起不断磨炼。")
