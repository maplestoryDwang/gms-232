# [Root Abyss] World Tree In Danger

NEINHEART = 1404009
sm.setSpeakerID(NEINHEART)
sm.sendNext("新地区的探索结束了吗？一直联系不上你，我还担心会不会出什么事了呢。")

sm.setPlayerAsSpeaker()
sm.sendNext("这段时间发生了很多事情。")

sm.sendNext("(向南哈特讲述在鲁塔比斯发生的事情。)")

sm.setSpeakerID(NEINHEART)
sm.sendNext("……真让人吃惊。如果这一切都是真的，那就是非常大的事件。很久以前消失了的世界树又重新出现，是件好事。但是你说有一群来历不明的人正在觊觎世界树的力量，这是个非常严重的问题。")

sm.setPlayerAsSpeaker()
sm.sendNext("鲁塔比斯现在充满了黑暗力量，世界树好像很难受。必须尽快把世界树救出来才行。")

sm.setSpeakerID(NEINHEART)
sm.sendNext("知道了。我会把这件事告诉冒险岛联盟，尽快制定对策。你能稍等一下再来找我吗？")
sm.completeQuest(parentID)
sm.dispose()
