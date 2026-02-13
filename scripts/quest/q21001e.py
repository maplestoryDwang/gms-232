# 914000500
ATHENA = 1209007

sm.setSpeakerID(ATHENA)
if sm.sendAskYesNo("呵呵，平安回来了？孩子呢？孩子也带回来了吗？"):
    sm.completeQuest(parentID)
    sm.consumeItem(4001271)

    sm.flipSpeaker()
    sm.sendNext("太好了……真是太好了。")

    sm.setPlayerAsSpeaker()
    sm.sendSay("赶快上船！已经没时间了！")

    sm.setSpeakerID(ATHENA)
    sm.flipSpeaker()
    sm.sendSay("啊，没错。现在不是感伤的时候。黑魔法师的气息越来越近！似乎他们已经察觉方舟的位置，得赶紧启航，不然就来不及了！")

    sm.setPlayerAsSpeaker()
    sm.sendSay("立刻出发！")

    sm.setSpeakerID(ATHENA)
    sm.flipSpeaker()
    sm.sendSay("战神！请你也上船吧！我们理解你渴望战斗的心情……不过，现在已经晚了！战斗就交给你的那些同伴吧，和我们一起去金银岛吧！")

    sm.setPlayerAsSpeaker()
    sm.sendSay("不行！")
    sm.sendSay("赫丽娜，你先出发去金银岛。一定要活着，我们一定会再见的。我要和同伴们一起同黑魔法师战斗！")

    sm.lockInGameUI(True, False)
    sm.completeQuest(parentID)
    sm.warp(914090010, 0)
else:
    sm.sendNext("What about the child? Please give me the child.")
    sm.dispose()
