# End of The Path of Bravery
KIMU = 1102004
sm.setSpeakerID(KIMU)
sm.removeEscapeButton()

sm.sendNext("你去和奇库打过招呼了吗？#h0#，我们这些教官会让你成为一名优秀的骑士。")
sm.sendSay("欢迎会差不多该结束了，让我们开始修炼吧。做好心理准备了吗？")

sm.completeQuestNoRewards(parentID)
sm.warp(130030101) # Forest of Beginnings