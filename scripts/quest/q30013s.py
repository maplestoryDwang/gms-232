# [Root Abyss] World Tree Rescue

ALICIA = 1064002 # npc Id
sm.removeEscapeButton()
sm.lockInGameUI(True)
sm.setSpeakerID(ALICIA)
sm.showFieldEffect("Map/Effect.img/rootabyss/undo")
sm.showFieldBackgroundEffect("Effect/Direction11.img/effect/meet/frame0/0")
sm.invokeAfterDelay(4000, "sendNext", "Thank you so much, I can finally go wherever I want!")

sm.setPlayerAsSpeaker()
sm.sendNext("封印全部解开了，这下终于可以到外面去了！")

sm.sendNext("(南哈特让我把世界树带到圣地去，该怎么办呢？她刚刚解开了封印，看她那么开心……)")

sm.setSpeakerID(ALICIA)
sm.sendNext("祝贺你恢复了自由。但是……冒险岛联盟希望你到圣地去。")

sm.setPlayerAsSpeaker()
sm.sendNext("圣地……？")

sm.setSpeakerID(ALICIA)
sm.sendNext("嗯，因为有很多人都在打你的主意，在圣地有女皇和神兽的保护，应该会比较安全。但是选择权在你自己，不愿意的话，不去也可以。他们没有权利逼迫你做出选择。")

sm.setPlayerAsSpeaker()
sm.sendNext("……你说的对，如果在外面乱走，我的力量也许会被邪恶的家伙夺走。冒险岛联盟的判断是正确的。虽然有点不太乐意，但是在力量完全恢复之前，我会待在圣地。")

sm.setSpeakerID(ALICIA)
sm.sendNext("真的没关系吗？被关了这么久，你难道不想到外面的世界去看看吗？")

sm.setPlayerAsSpeaker()
sm.sendNext("没关系。等力量完全恢复之后，再去享受自由也不迟。到了那时，想动坏主意的家伙，我一下子就能解决！")

sm.lockInGameUI(False)
sm.startQuest(parentID)
sm.warpInstanceIn(913080001, 0) # Fake Cutscene Field (Ereve)
