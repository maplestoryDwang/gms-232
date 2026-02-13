# id 32115 ([Ellinel Fairy Academy] Clue Number Two), field 101072500
sm.setSpeakerID(1500023) # Hidey Hole
if sm.sendAskAccept("总觉得有个地方非常可疑。要去调查下吗？"):
    sm.setParam(2)
    sm.sendNext("#i4033829# \r\n\r\n找到了一堆衣服。看上去不像是平时穿的衣服……要展开看看吗？")
    sm.sendSay("#i1052196##i1050168##i1052495#\r\n\r\n果真如此……这些衣服是看上去就是为了演出而特别制作的。把衣服拿给库迪，看看他怎么说。")
    if sm.canHold(4033829):
        sm.startQuest(parentID)
        sm.giveItem(4033829)
    else:
        sm.sendNext("You can't hold the Fairy Stage Costumes because you don't have sufficient inventory space.")
