CHIEF = 1012003

sm.lockInGameUI(True, False)
sm.forcedInput(0)
sm.removeEscapeButton()
sm.setSpeakerID(CHIEF)
sm.sendNext("好的，先打开地图，我来继续给你说明。")

sm.reservedEffectRepeat("Effect/Direction15.img/effect/story/worldmap/0")
sm.sendDelay(1000)

sm.sendNext("这是冒险岛地图。看见这个岛了吗？这就是金银岛。射手村就在这里，位于金银岛的南部。")

sm.reservedEffectRepeat("Effect/Direction15.img/effect/story/worldmap/1")
sm.sendDelay(1500)

sm.reservedEffectRepeat("Effect/Direction15.img/effect/story/worldmap/1", False)
sm.sendNext("神木村？神木村在大海的对面，在神秘岛上。冰峰雪域在这里，尼哈沙漠在这里。")

sm.reservedEffectRepeat("Effect/Direction15.img/effect/story/worldmap/2")
sm.reservedEffectRepeat("Effect/Direction15.img/effect/story/worldmap/3")
sm.reservedEffectRepeat("Effect/Direction15.img/effect/story/worldmap/4")
sm.sendDelay(1500)

sm.reservedEffectRepeat("Effect/Direction15.img/effect/story/worldmap/2", False)
sm.reservedEffectRepeat("Effect/Direction15.img/effect/story/worldmap/3", False)
sm.reservedEffectRepeat("Effect/Direction15.img/effect/story/worldmap/4", False)
if sm.sendAskAccept("看来你的故乡是神秘岛大陆。我们村也有来自神秘岛大陆的人，哦不，应该是精灵。叫做#r赫丽娜#k…………你想见见吗？"):
    sm.startQuest(parentID)
    sm.setPlayerAsSpeaker()
    sm.sendNext("(#r赫丽娜#k？精灵赫丽娜，是那个整天跟着双弩精灵的孩子吗？听说她乘坐避难船，去了金银岛。看来她在这个村子里安顿了下来。赫丽娜也许知道双弩精灵的消息。)")

    sm.setSpeakerID(CHIEF)
    sm.sendSay("赫丽娜就在弓箭手培训中心。她正忙着为新手弓箭手培训，所以你别占用她太多的时间。")
    sm.lockInGameUI(False)