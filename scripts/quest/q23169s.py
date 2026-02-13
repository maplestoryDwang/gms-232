ELEX = 2151000
MASTERWORK_CHARGES = 1353403

sm.setSpeakerID(ELEX)
sm.sendNext("赶紧过来，反抗者的英雄，能在村庄见到#h0#你更让人开心呢？这个村庄真的很美，不枉我们豁出性命去保护，你说是不是？")

sm.flipDialoguePlayerAsSpeaker()
sm.sendSay("现在身体没事了吗？")

sm.setSpeakerID(ELEX)
sm.sendSay("恩，既然#p2151003#的实力已经很明确了，现在就可以像从前一样战斗了，不过还有个问题……")

sm.flipDialoguePlayerAsSpeaker()
sm.sendSay("又有什么问题了吗？难道黑色之翼有什么阴谋？")

sm.setSpeakerID(ELEX)
if sm.sendAskYesNo("不，这次的问题不是别人……而是你！你变得太强大了，居然能做到连我这个老师都做不到的事情，真叫人汗颜啊……所以我打算再给你点更难一些的课题，你有信心吗？"):
    if not sm.canHold(MASTERWORK_CHARGES):
        sm.sendSayOkay("我已经将连我自己都没法完美诠释的艰难顶级技能都传授给你了，我相信虽然这股力量我没法完全操控，但你绝对可以，没问题了吧？反抗者的英雄！")
        sm.dispose()
    sm.startQuest(parentID)
    sm.completeQuest(parentID)
    sm.jobAdvance(3712)
    sm.giveItem(MASTERWORK_CHARGES)
    sm.sendNext("这是我的最后一项课程了吗……不，不可能。我可是很有能力的反抗者。现在你比我强，但你还有能跟我学习的吧？所以……下个课程见吧。虽然不知道什么时候能开始。")
    sm.sendSay("在此之前我会期待你作为反抗者大展拳脚的。")
    sm.sendPrev("I look forward to seeing what you accomplish.")
