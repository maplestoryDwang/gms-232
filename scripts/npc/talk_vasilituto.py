# Vasily (10305) | Maple Road : Port
sm.setSpeakerID(parentID)
if sm.hasQuestCompleted(32214):
    if sm.sendAskYesNo("托你的福，出航准备已经全部完成了。现在上船吗？"):
        sm.warp(4000032, 0)
elif sm.hasQuest(32214):
    if sm.sendAskYesNo("我现在就把你送进去，请你把在船内制造骚乱的怪物消灭掉吧！"):
        sm.warpInstanceIn(4000033, 0, False)
else:
    sm.sendSayOkay("我还没做好准备啊")