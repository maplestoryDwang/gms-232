# The Path of a Thunder Breaker - Completion


sm.setSpeakerID(1101007) # Hawkeye
if sm.canHold(1482000):
    sm.jobAdvance(1500) # Thunder Breaker 1st Job
    sm.addSP(5)
    sm.setSTR(4)
    sm.setINT(4)
    sm.setDEX(4)
    sm.setLUK(4)
    sm.setAP(4 + chr.getLevel() * 5)
    sm.completeQuest(parentID)
    sm.giveItem(1482000) # Steel Knuckler
    sm.sendSayOkay("你真的选好了吗？出于谨慎，我必须告诉你，选择之后是不能后悔的。请慎重决定。你真的要选择奇袭者之路吗？")
else:
    sm.sendSayOkay("从现在开始，你就是奇袭者了！呀呼！闪电骑士团又增加了新成员！对了，我都忘了，得先给你分配一些能力。")