# [Root Abyss] Guardians of the World Tree

MYSTERIOUS_GIRL = 1064001 # npc Id
sm.removeEscapeButton()
sm.lockInGameUI(True)
sm.setPlayerAsSpeaker()
sm.sendNext("为了解开你的封印，必须先了解入侵者的身份。")

sm.setSpeakerID(MYSTERIOUS_GIRL)
sm.sendNext("但是他们已经全部走掉了。")

sm.setPlayerAsSpeaker()
sm.sendNext("也许会留下什么线索，让我们找找看吧。对于那边的四扇门，你知道些什么吗？")

sm.setSpeakerID(MYSTERIOUS_GIRL)
sm.sendNext("把我封印起来的那些人制造了那些门之后就走了。我试着到门外去，但是因为封印的原因，没办法出去。")

sm.setPlayerAsSpeaker()
sm.sendNext("那些门的外面会不会有什么线索呢？到门外面去……嗯？这是怎么回事？")

sm.setSpeakerID(MYSTERIOUS_GIRL)
sm.sendNext("哇，你的身体发出了白光！")
sm.invokeAtFixedRate(0, 2450, 3, "showEffect", "Effect/Direction11.img/effect/Aura/0", 3, 0)

sm.setPlayerAsSpeaker()
sm.sendNext("这到底是怎么回事？嗯，嗯？身，身体被吸进去了！")

sm.setSpeakerID(MYSTERIOUS_GIRL)
sm.sendNext("#h0#!!!")

sm.startQuest(parentID)
sm.lockInGameUI(False)
sm.warpInstanceIn(910700300, 0) # Fake Vellum Cave for QuestLine
