# 57105 | powerless
sm.setSpeakerID(9130008)
sm.sendNext("#face0#你、你是……")
sm.setPlayerAsSpeaker()
sm.sendNext("阁下是毛利元就大人吧。我曾经在本能寺攻略战的军事会议中见过阁下。我是松山家的家臣，姐崎朝信的儿子，名为姐崎剑斗。我刚刚才到达“这边”，一到达就立刻赶来枫叶山丘了。")
sm.setSpeakerID(9130008)
sm.sendNext("#face1#欢迎来到枫叶山丘。不知道该说是幸运还是不幸，我和我的三个儿子是最先到达“这边”这个世界的。为了方便联合军再次聚集在一起，我们就在枫叶山丘建起了这个本阵。同时，我们也在帮忙之后到达的各位尽快适应这个世界。")
sm.setPlayerAsSpeaker()
sm.sendNext("帮忙适应这个世界？")
if sm.sendAskYesNo("#face0#那就请剑斗你先确认一下，看看现在的自己是否能够活动自如吧。"):
    sm.startQuest(parentID)
    sm.dispose()
else:
    sm.dispose()
