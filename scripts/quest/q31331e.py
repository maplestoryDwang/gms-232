# [Stone Colusses] It Ain't Natural

CHIEF_TATOMO = 2081000

sm.setSpeakerID(CHIEF_TATOMO)
sm.sendNext("你应该已经从大精灵古瓦洛那里听说了，这是非常严重的事件。不过对你这样的勇士来说，这件事一定也挺有趣的。怎么样？准备好了吗？\r\n\r\n\r\n#b怎么才能到岩壁巨人那里去呢？#k")

sm.sendSay("呵呵呵，你这就想走了吗？性子可真够急的。我们哈夫林中的几个探查队员已经去了那里，他们可以帮助你。\r\n\r\n\r\n#b哈夫林？#k")

response = sm.sendAskYesNo("是的，我们种族大部分人都喜欢平静、和平、淳朴的生活，但是……偶尔有些人生来就流淌着探险家的血。我根本没办法阻止那些家伙。\r\n如果你想去的话，我可以马上送你过去。怎么样？")

if response:
    sm.sendNext("好的，我马上就送你去。去了之后，顺便帮我看看那里的哈夫林的情况。")
    sm.completeQuest(parentID)
    sm.warp(240090000) # Stone Colossus Exploration Site

else:
    sm.sendNext("Oh.. Okay.. I mean.. I thought you were all about adventures.. I guess I was wrong..\r\n\r\n"
                "This is so sad.\r\n"
                "Alexa, play Despacito 5!")