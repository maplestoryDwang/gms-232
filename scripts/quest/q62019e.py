# [Shaolin Temple] Making a Mask

DABAO = 9310034
HUMAN_FACE_MASK = 4034664
GOBLIN_DEMON = 9310578
SECRET_LIBRARY = 701220350
SOFT_LEATHER = 4034724

sm.removeEscapeButton()
sm.setSpeakerID(DABAO)
sm.setBoxChat()
sm.sendNext("真厉害，你居然把材料搜集来了。接下来就看看我的手艺吧！")

sm.sendNext("……嗒嗒嗒嗒……")

sm.flipBoxChat()
sm.flipBoxChatPlayerAsSpeaker()
sm.sendNext("……嗒嗒嗒嗒……")

sm.completeQuest(parentID)
sm.consumeItem(SOFT_LEATHER, 30)
sm.giveExp(1515339)
sm.giveItem(HUMAN_FACE_MASK)
