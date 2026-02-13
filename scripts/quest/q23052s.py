# BaM 4th job Advance

BRISTON = 2151001

sm.setSpeakerID(BRISTON)
sm.sendNext("哎呀……这不是我们的英雄#h0#吗？呵呵，能在村里见到你，真让人高兴。虽然我们村被黑色之翼占领了，但我们村还是最美的。不是吗？")

sm.flipDialoguePlayerAsSpeaker()
sm.sendSay("身体现在没事了吧？")

sm.setSpeakerID(BRISTON)
sm.sendSay("嗯，#p2151003#的本事很好，我已经没事了。现在已经完全恢复到了过去的状态。不过还有一个问题。")

sm.flipDialoguePlayerAsSpeaker()
sm.sendSay("又有什么问题？难道黑色之翼又在策划什么阴谋？")

sm.setSpeakerID(BRISTON)
if sm.sendAskYesNo("不，这次的问题就是…你！你变得太强大了，居然做到了连我都做不到的事情。这可太让我羞愧了！所以我要给你一个更难的课题！"):
    sm.startQuest(parentID)
    sm.completeQuest(parentID)
    sm.jobAdvance(3212)
    sm.sendNext("我已经让你转职了。同时我把我知道的，但又无法熟练掌握的所有最高的技能传授给了你。虽然我没能完全掌握它们，但我相信你一定可以做到。你是我们反抗者中的最强者！还有什么做不到的呢？")
    sm.sendSay("这是我的最后一项课程了吗……不，不可能。我可是很有能力的反抗者。现在你比我强，但你还有能跟我学习的吧？所以……下个课程见吧。虽然不知道什么时候能开始。")
    sm.sendPrev("I look forward to seeing what you accomplish.")
