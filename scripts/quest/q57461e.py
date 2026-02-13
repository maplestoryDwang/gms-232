# Awakened Spirit
# 57461
# Haku (9130081)

spiritShroom = 4033278
hakuMount = 80001157

haku = 9130081

sm.removeEscapeButton()
sm.setSpeakerType(3)
sm.setColor(1)
sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(haku)
sm.sendNext("#face0#哦哦，很好，就是这个！有了这个寄宿着灵力的蘑菇，就足够让我用来扩张灵力储备量的了。你稍等一下哦。")
sm.sendNext("#face0#（嚼嚼）")
sm.sendNext("#face0#嗯……嗯，很好，我能感觉得到。这样一来，完全可以让你骑在我的身上进行移动啦。如果你需要骑上来的时候，就不要客气尽管说哦。")

sm.completeQuest(parentID)
sm.giveSkill(hakuMount)
sm.consumeItem(spiritShroom)