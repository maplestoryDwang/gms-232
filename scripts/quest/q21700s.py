# 140000000
LILIN = 1201000

sm.setSpeakerID(LILIN)
sm.flipSpeaker()
sm.sendNext("你似乎在回想什么。这个长矛果然认出了你。那么你肯定就是#b使用长矛的英雄，战神#k了。你想起什么其他的了吗？有关长矛的技能之类……")

sm.setPlayerAsSpeaker()
sm.sendSay("#b（说技能倒是想起来了几个。）#k")

sm.setSpeakerID(LILIN)
sm.flipSpeaker()
sm.sendSay("虽然数量不多，不过也已经很不容易了。现在让我们集中精力来恢复过去的技能吧。虽然你失忆了，但毕竟是以前曾经烂熟于心的东西，要恢复起来应该很快。")

sm.setPlayerAsSpeaker()
sm.sendSay("那个…………办法只有一个。就是修炼！修炼！修炼！只有不停地修炼才能找回曾经忘却的身体感觉！")

sm.setSpeakerID(LILIN)
if sm.sendAskAccept("武器要是能使得更熟练就好了。送你一支#b长矛#k。希望你在修炼的时候能够进步得更快。带着这支长矛……"):
    # sm.giveItem(1442077)
    sm.startQuest(parentID)
    sm.completeQuest(parentID)

    sm.sendNext("嗯，等等。那现在要怎么做呢…………")
    sm.sendPrev("Hmm. Give me a second. I need to think about what you should do now...")
else:
    sm.sendNext("怎么恢复过去的技能？")