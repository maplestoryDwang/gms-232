# Created by MechAviv
# Quest ID :: 32240
# The Explorer Book and A Maple Leaf

sm.flipDialogue()
sm.flipDialoguePlayerAsSpeaker()

sm.setSpeakerType(3)
sm.sendNext("#b冒险之书#k？你是说可以在这里写下我的冒险故事，对吧？")


sm.setSpeakerID(1012100)
sm.flipDialoguePlayerAsSpeaker()
sm.setSpeakerType(3)
sm.sendSay("虽然从开始旅行到现在已经有一段时间，可对于冒险岛世界，还是有很多不了解的地方。既然这样，不如开启一段全新的冒险旅程吧？……哎？")


sm.giveItem(4460000)
sm.giveExp(170)
sm.completeQuest(32240)
sm.curNodeEventEnd(True)
sm.lockInGameUI(True, False)
sm.showFieldEffect("adventureStory/mapleLeaf/0", 0)
sm.sendDelay(1800)


sm.lockInGameUI(False)
sm.setSpeakerID(1012100)
sm.removeEscapeButton()
sm.flipDialoguePlayerAsSpeaker()
sm.setSpeakerType(3)
sm.sendNext("这是什么枫叶？这么看来，冒险岛上存在着巨大的枫树。这枫叶是跟随我来到这里的吗？")


sm.setSpeakerID(1012100)
sm.removeEscapeButton()
sm.flipDialoguePlayerAsSpeaker()
sm.setSpeakerType(3)
sm.sendSay("这也算是一种纪念，好好珍藏吧。夹在#b 冒险之书#k里的话，就不会弄皱了。")
