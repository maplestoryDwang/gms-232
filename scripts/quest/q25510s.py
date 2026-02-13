# The Middle Road - Luminous 2nd job adv
sm.setSpeakerID(1032209)
sm.sendNext("夜光法师，我知道这样做很突兀，但请你集中精力相信我。我要唤醒夜光法师身上的光之力量，引导出你体内的黑暗力量。如果成功的话，夜光法师就不用再被黑暗力量束缚了。")
sm.setPlayerAsSpeaker()
sm.sendNext("(感觉飞鱼丸的声音好像缓缓的包裹住了我体内的黑暗力量。)")
sm.sendNext("黑暗力量不再侵蚀我的灵魂了呢。这都是你的功劳。")
sm.setSpeakerID(1032209)
sm.sendNext("过奖了。这一切都要归功于夜光法师你想要战胜黑暗力量的坚强意志。我只是在旁边帮了点小忙而已。这个你应该知道，是能够自由出入希利尼提的极光三棱镜。收下吧。")
if sm.canHold(2430874) and chr.getLevel() >= 30 and chr.getJob() == 2700:
    sm.setJob(2710)
    sm.addSP(3)
    sm.giveItem(2430874)
    sm.startQuest(parentID)
    sm.completeQuest(parentID)
else:
    sm.sendNext("Please make room in your USE inventory. I can't give you the Aurora Prism if you don't have space for it in your USE inventory.")