# [Shaolin Temple] Say My Name 2

NINE_TAILED_FOX = 9310579
selectName = ["Quashara", "Quivia", "Shaniqua"]

sm.removeEscapeButton()
sm.setSpeakerID(NINE_TAILED_FOX)
sm.setBoxChat()
sm.sendNext("你……真是个值得信赖的#r人类#k啊。我挺喜欢你的！")

sm.flipBoxChat()
sm.flipBoxChatPlayerAsSpeaker()
sm.sendNext("对了，#b#p9310579##k你叫什么#r名字#k？")

sm.setSpeakerID(NINE_TAILED_FOX)
sm.setBoxChat()
sm.sendNext("#r名字#k？那是什么东东？")

sm.flipBoxChat()
sm.flipBoxChatPlayerAsSpeaker()
sm.sendNext("嗯……就是别人在称呼你时使用的独一无二的词。我的名字叫#r#h0##k。名字就是用来区分自己和别人的一种称呼。")

sm.sendNext("如果你不介意的话，我来帮你起#r名字#k吧！")

sm.setSpeakerID(NINE_TAILED_FOX)
sm.setBoxChat()
sm.sendNext("嗯……好吧……起得好听点就行！")

sm.flipBoxChat()
sm.flipBoxChatPlayerAsSpeaker()
text = "Hmm, what about I call you...\r\n"
for i in range(len(selectName)):
    text += "#L"+ str(i) +"#"+ selectName[i] +"\r\n"
selection = sm.sendNext(text)

sm.createQuestWithQRValue(62015, selectName[selection])

sm.setSpeakerID(NINE_TAILED_FOX)
sm.setBoxChat()
sm.sendNext("那么~该起个什么名字呢？适合你的名字……\r\n#L0#白狐#l\r\n#L1#卡珊德拉#l\r\n#L2#美狐#l")

sm.flipBoxChat()
sm.flipBoxChatPlayerAsSpeaker()
sm.sendNext("嗯……美狐……？我喜欢这个#r名字#k。")

sm.setSpeakerID(NINE_TAILED_FOX)
sm.setBoxChat()
sm.sendNext( "我怎么感觉不太对劲……帮我起个别的#r名字#k吧。")

sm.startQuest(parentID)
sm.completeQuest(parentID)
sm.giveExp(1010226)