# [Root Abyss] The World Girl

MYSTERIOUS_GIRL = 1064001 # npc Id
sm.removeEscapeButton()
#sm.lockInGameUI(True)
sm.setPlayerAsSpeaker()
sm.sendNext("如果你真的是世界树，为什么会被困在这里呢？既然鲁塔比斯是你创造的，那应该不会无法离开这里啊？")

sm.setSpeakerID(MYSTERIOUS_GIRL)
sm.sendNext("都是那些家伙干的！")

sm.setPlayerAsSpeaker()
sm.sendNext("那些家伙？")

sm.setSpeakerID(MYSTERIOUS_GIRL)
sm.sendNext("在这里沉睡之前，我在周围设置了结界。但是不久前有一些人打破了结界，入侵了这里。由于结界被打破的冲击，我从沉睡中醒了过来，他们想把我抓走。")

sm.setPlayerAsSpeaker()
sm.sendNext("入侵者是黑魔法师的手下吗？")

sm.setSpeakerID(MYSTERIOUS_GIRL)
sm.sendNext("我也不知道。他们全都披着斗篷，看不见脸。啊，对了，有个一只眼睛戴着眼罩的魔族男子好像是他们的队长。")

sm.showFieldBackgroundEffect("Effect/Direction11.img/effect/meet/frame0/0")
sm.showFieldEffect("Map/Effect.img/rootabyss/demian")
#sm.invokeAfterDelay(1000, "showFadeTransition", 1500, 0, 1000)

sm.setPlayerAsSpeaker()
sm.invokeAfterDelay(4500, "sendNext", "A demon with an eyepatch tried to kidnap you? Do you realise how crazy that sounds?")

sm.setSpeakerID(MYSTERIOUS_GIRL)
sm.sendNext("(一只眼睛戴着眼罩的魔族？到底是谁呢？)")

sm.setPlayerAsSpeaker()
sm.sendNext("他们发现我的力量还没有完全恢复，就把我封印在了这里，说要等我完全恢复力量之后再把我带走。")

sm.setSpeakerID(MYSTERIOUS_GIRL)
sm.sendNext("把你封印在了这里？所以你才没办法出去吗？")

sm.sendNext("嗯，我试了各种办法，但还是没办法出去。而且那些家伙在鲁塔比斯注入了黑暗力量。因为黑暗力量的影响，我现在一点力气都使不出……")
#sm.lockInGameUI(False)
sm.completeQuest(parentID)