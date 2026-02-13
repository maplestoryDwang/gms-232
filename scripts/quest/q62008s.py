# [Shaolin Temple] Funny Face

JANITOR_MONK = 9310048
WISE_CHIEF_PRIEST = 9310053
ANTIDOTE = 2050000

sm.removeEscapeButton()

sm.setSpeakerID(JANITOR_MONK)
sm.setBoxChat()
sm.sendNext("这里非常危险！你最好马上离开。不然的话……不然的话……")

sm.flipBoxChat()
sm.flipBoxChatPlayerAsSpeaker()
sm.sendNext(" (这的确是大师的衣服，可怎么长了一个妖怪的脸。大师到底怎么了！？) ")

sm.setSpeakerID(JANITOR_MONK)
sm.setBoxChat()
sm.sendNext("呜呜……前几天，为了冲洗一下清扫工具，我到井边去打水，可我被水中自己的模样吓了一跳。我那张原本帅气、帅气无比的脸！！！！居然变得如此丑陋。这肯定是这里的妖怪搞的鬼。如果你也不想变成这样，最好马上离开。")

sm.flipBoxChat()
sm.flipBoxChatPlayerAsSpeaker()
sm.sendNext("我是受#b#p9310053##k之托而来的。我需要在这里找一本#b书#k……不过，大师你的脸变成这样，我也不能置之不理。有什么我可以帮助你的吗？")

sm.setSpeakerID(JANITOR_MONK)
sm.setBoxChat()
response = sm.sendAskYesNo("那你去杂货商店帮我带来#i2050000#  #b#t2050000##k吧？我怕别人把我误当成妖怪，所以我还是不出去为好。")

if response:
    sm.sendNext("你可真是个好人啊！你帮我带来1个#i2050000#  #b#t2050000##k就可以了。拜托你了。")
    sm.startQuestNoCheck(parentID)
else:
    sm.sendSayOkay("You just offered to help me, but when I ask for a #v"+ str(ANTIDOTE) +"# #b#t"+ str(ANTIDOTE) +"##k, it's too much work?")