# [Shaolin Temple] Nine-Tailed Fox's One True Love

NINE_TAILED_FOX = 9310579
MOUNTAIN_PATH_2 = 701210130

sm.removeEscapeButton()
sm.setSpeakerID(NINE_TAILED_FOX)
sm.setBoxChat()
sm.sendNext("嗯……#b#p9310577##k找了半天都找不到的鞋子，居然被你一下子就找到了，看来你是个挺聪明的人类呢。")

sm.sendNext("那么……你应该也肯帮我一个忙的吧？")

sm.flipBoxChat()
sm.flipBoxChatPlayerAsSpeaker()
sm.sendNext("你说吧。")

sm.setSpeakerID(NINE_TAILED_FOX)
sm.setBoxChat()
response = sm.sendAskYesNo("你得先答应我才行！！在你答应我之前，我是不会告诉你任何细节的。")

if response:

    sm.sendNext("谢谢你。这是一个有关#r人类和妖怪的悲情故事#k。而那个主人公就是我。")

    sm.sendNext("我在这里遇到了我生命中的男子。而且那个男子也爱我……他说#r能为我付出一切#k。")

    sm.sendNext("这是不是很伟大啊？总……总之，希望你能帮我把这封信交给他。")

    sm.sendNext("现在，人们抓妖怪抓红了眼。我独自前往的话，非常危险。我怕他担心我，所以请你帮我把这封信交给他吧。")

    sm.flipBoxChat()
    sm.flipBoxChatPlayerAsSpeaker()
    sm.sendNext(" (向来冷漠的#b#p9310579##k居然也有这样的心意……不过，居然有人和妖怪相恋。真想看看那人的庐山真面目！)")

    sm.setSpeakerID(NINE_TAILED_FOX)
    sm.setBoxChat()
    sm.sendNext("你前往#r#m701210130##k就能找到他。")

    sm.startQuest(parentID)

else:
    sm.sendSayOkay("If you are going to judge me, I won't tell my tale.")