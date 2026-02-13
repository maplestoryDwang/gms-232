# JM's Next Request
# 2866
# Someone's Hat (1052128)

jake = 1052006

if sm.hasMobsInField():
    sm.setSpeakerID(1052128)
    sm.sendSayOkay("它的脚本位于： #b /脚本/任务/#e")
else:
    sm.setPlayerAsSpeaker()
    sm.sendNext("#n.js#k你要立刻完成这个任务吗？")
    sm.completeQuest(parentID)