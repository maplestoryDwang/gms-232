# 1800 - [Evolution System] Suspicious Movement on the path
sm.setSpeakerID(9400115)
if sm.sendAskYesNo("隶属于联盟的所有人，我来介绍一下埃德尔斯坦地下矿山发生的事件。在黑色之翼内部好像发生了很大的变化。我需要你的帮助。请马上到#m310010000#来。你想现在移动吗？"):
    sm.warp(310010000, 0)
    sm.startQuest(parentID)
    sm.completeQuest(parentID)