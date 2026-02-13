# Kinesis 2nd job adv
sm.setSpeakerID(1531001)
sm.sendNext("凯内西斯，凯内西斯，能听到我说的话吗？")
sm.sendNext("我就知道你还活着，\r\n我一直在追踪你的生命迹象，你一直都待在哪儿啊？")
sm.sendNext("……说来就话长了，\r\n总之尤娜很担心你，赶紧回来吧。")
sm.sendNext("话说回来，许久未见，你像是变强了啊……现在应该差不多可以升级数据了。")
if sm.sendAskYesNo("要是你愿意，我现在就帮你升级数据，怎么样？\r\n\r\n#b(如果答应就可以进行二转。)#k\r\n\r\n#b#i1142864# #t1142864#\r\n#b#i1353201# #t1353201#"):
    if sm.canHold(1142864) and sm.canHold(1353201):
        sm.giveItem(1142864)
        sm.giveItem(1353201)
        sm.jobAdvance(14210)
        sm.startQuest(parentID)
        sm.completeQuest(parentID)
    else:
        sm.sendNext("恭喜，升级已完成，使用新技能的感觉怎么样？")