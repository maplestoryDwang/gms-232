CHECKY = 2151004

sm.setSpeakerID(CHECKY)
sm.sendNext("哎呀……这不是我们的英雄#h0#吗？呵呵，能在村里见到你，真让人高兴。虽然自由和和平被夺走了，但这里还是最美的地方。")

sm.flipDialoguePlayerAsSpeaker()
sm.sendSay("现在身体好一点了吗？")

sm.setSpeakerID(CHECKY)
sm.sendSay("是的，#p2151003#的药很管用，我已经好多了。几乎已经完全恢复到以前的状态了。不过有一个很大的问题。")

sm.flipDialoguePlayerAsSpeaker()
sm.sendSay("又有什么问题？难道黑色之翼又在策划什么阴谋？")

sm.setSpeakerID(CHECKY)
if sm.sendAskYesNo("这次的问题不是别的……就是你！你太强了我的作用都变弱了。不过我可是教授反抗者机械的老师，居然比徒弟还弱……所以我要给你更难的课题。"):
    sm.startQuest(parentID)
    sm.completeQuest(parentID)
    sm.jobAdvance(3512)
    sm.sendNext("我已经让你转职了。同时把我可以制作的最强的机器人送给了你。那些东西连我都无法完全控制，无法完全发挥出它们的能力……不过我想你一定可以做到。因为你是反抗者最强的机械师。")
    sm.sendSay("现在我的课程……已经快要结束了。但是现在还不会结束。虽然你确实比我强了，但是你还有很多要向我学习的地方。我们下次课程再见吧。虽然不知道下次课程什么时候会开始……")
    sm.sendPrev("I look forward to seeing what you accomplish.")
