# 20838 Certified Knight - Cygnus tutorial quest
sm.setSpeakerID(1102007)
sm.sendAskYesNo("3个考试的证物拿来了吗？")
if sm.hasItem(4033670, 3):
    sm.sendNext("啊哈～果然名不虚传。考试合格了。我送给你的椅子，是我亲手制作的。希望你能好好使用。累了的时候，可以坐在上面休息一下，血量就会快速回复。应该已经放到背包设置栏中了，你可以去确认一下。")
    sm.completeQuest(parentID)
    sm.giveItem(3010060)
else:
    sm.sendSayOkay("Don't lie to me! I know you haven't gathered 3 Proof of Exams yet!")