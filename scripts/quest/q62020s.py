# [Shaolin Temple] Say My Name 3

GOBLIN_DEMON = 9310578
BLUE_DEMON = 9310577
NINE_TAILED_FOX = 9310579
selectName = ["Aharon", "Baruch", "Binyamin"]


sm.removeEscapeButton()
sm.setSpeakerID(GOBLIN_DEMON)
sm.setBoxChat()
sm.sendNext("我非常……喜欢这张脸~！怎么样，我真的变帅了吧？")

sm.flipBoxChat()
sm.flipBoxChatPlayerAsSpeaker()
sm.sendNext("现在我感觉我的眼睛都好受多了。……嗯！！对了，#b#p9310578##k，你叫什么#r名字#k？")

sm.setSpeakerID(GOBLIN_DEMON)
sm.setBoxChat()
sm.sendNext("#r名字#k？那是什么东东？")

sm.flipBoxChat()
sm.flipBoxChatPlayerAsSpeaker()
sm.sendNext("嗯……就是别人在称呼你时使用的独一无二的词。我的名字叫#r#h0##k。名字就是用来区分自己和别人的一种称呼。")

sm.sendNext("如果你不介意的话，我来帮你起#r名字#k吧！")

sm.setSpeakerID(GOBLIN_DEMON)
sm.setBoxChat()
sm.sendNext("嗯……好吧……起得好听点就行！")

sm.flipBoxChat()
sm.flipBoxChatPlayerAsSpeaker()
text = "Hmm, what name would suit you best? I think you'd be perfect as a...\r\n"
for i in range(len(selectName)):
    text += "#L"+ str(i) +"#"+ selectName[i] +"\r\n"
selection = sm.sendNext(text)

sm.createQuestWithQRValue(62018, selectName[selection])

sm.setSpeakerID(GOBLIN_DEMON)
sm.setBoxChat()
sm.sendNext("那么~该起个什么名字呢？适合你的名字……\r\n#L0#大石脸#l\r\n#L1##h0##l\r\n#L2#贵鬼#l")

sm.flipBoxChat()
sm.flipBoxChatPlayerAsSpeaker()
sm.sendNext("贵鬼？不错啊，可爱，又有男子汉的气概，跟我的脸很相配呢！我喜欢这个#r名字#k。")

sm.setSpeakerID(GOBLIN_DEMON)
sm.setBoxChat()
sm.sendNext("我怎么感觉不太对劲……帮我起个别的#r名字#k吧。")

sm.startQuest(parentID)
sm.completeQuest(parentID)
sm.giveExp(1010226)


sm.warpInstanceIn(701220350)
sm.lockInGameUI(True, False)
sm.sendDelay(1000)

sm.setSpeakerID(NINE_TAILED_FOX)
sm.setBoxChat()
sm.sendNext("那么，从现在开始，你的名字就是#r贵鬼#k咯？")

sm.setSpeakerID(GOBLIN_DEMON)
sm.setBoxChat()
sm.sendNext("谢谢你，我的名字叫#r贵鬼#k。我有名字了，好开心呀。")

sm.setSpeakerID(NINE_TAILED_FOX)
sm.setBoxChat()
sm.sendNext("So, #b#h0##k. You said you wanted to check the bookshelf?\r\n"
            "You're free to do so whenever you like.")

sm.setSpeakerID(BLUE_DEMON)
sm.setBoxChat()
sm.sendNext("I love holding books and pretending to read them. It makes me look cute!")

sm.flipBoxChat()
sm.flipBoxChatPlayerAsSpeaker()
sm.sendNext("Hey, I was wondering... What are you guys doing here, anyway? In the human world, I mean.")

sm.setSpeakerID(GOBLIN_DEMON)
sm.setBoxChat()
sm.sendNext("My memory about it is pretty hazy... I woke up one day and found myself here.")

sm.setSpeakerID(BLUE_DEMON)
sm.setBoxChat()
sm.sendNext("Something scooped me up from my snuggly home and dropped me here. I think I heard someone talking... A human.")

sm.setSpeakerID(NINE_TAILED_FOX)
sm.setBoxChat()
sm.sendNext("Demons are born of human passion and imagination.\r\n"
            "Our entire world is fueled by it.")

sm.sendNext("The fervor with which you worship your gods... "
            "Even that shapes our world. but when you do evil in the name of your gods, it warps up.")

sm.sendNext("Because of humanity's corruption, \r\n"
            "OUR world has become horribly malformed.")

sm.sendNext("The only conclusion I can draw is that a human \r\n"
            "with special powers summoned us here for some evil purpose...")

sm.setSpeakerID(GOBLIN_DEMON)
sm.setBoxChat()
sm.sendNext("But who?")

sm.setSpeakerID(BLUE_DEMON)
sm.setBoxChat()
sm.sendNext("Maybe they'll come find us soon! We're like their babies, sorta!")

sm.flipBoxChat()
sm.flipBoxChatPlayerAsSpeaker()
sm.sendNext("(A demon world formed by human passions? A person who can summon demons? "
            "It's a lot to swallow, but the evidence is kind of undeniable. "
            "Who could be responsible for all of this?")

sm.setSpeakerID(NINE_TAILED_FOX)
sm.setBoxChat()
sm.sendNext("Anyway, go on and search the bookshelf now.")

sm.warpInstanceOut(701220350)
sm.lockInGameUI(False)