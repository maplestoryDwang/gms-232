MOONBEAM = 3002000

sm.setPlayerAsSpeaker()
sm.sendNext("感觉村里的氛围和平时不太一样。村里发生什么事了吗？")

sm.setSpeakerID(MOONBEAM)
sm.sendSay("……我也不知道。")

sm.setPlayerAsSpeaker()
sm.sendSay("(虽然不知道是什么，但一定有什么事。情绪消沉的样子，完全不是阿琅的作风。)")
sm.sendSay("哦，知道了。")

sm.setSpeakerID(MOONBEAM)
sm.sendSay("……对不起。")

sm.setPlayerAsSpeaker()
sm.sendSay("什么？")

sm.setSpeakerID(MOONBEAM)
sm.sendSay("没什么。对不起，真的很对不起……")

sm.startQuest(parentID)

sm.setPlayerAsSpeaker()
sm.sendSay("阿琅！到底发生了什么事，哭成那个样子……最好直接去问问她。")


