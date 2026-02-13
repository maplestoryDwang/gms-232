# [Shaolin Temple] Demon-iority Complex

GOBLIN_DEMON = 9310578
HUMAN_FACE_MASK = 4034664

sm.removeEscapeButton()
sm.setSpeakerID(GOBLIN_DEMON)
sm.setBoxChat()
sm.sendNext("哇哦~你真的把面具弄来啦！只要戴上这个，我应该也能变得有自信了吧。\n你真是个不错的人类啊！谢谢你！")
sm.completeQuest(parentID)
sm.consumeItem(HUMAN_FACE_MASK)
sm.giveExp(1515339)