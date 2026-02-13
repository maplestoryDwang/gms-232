# [Shaolin Temple] Say My Name 1

BLUE_DEMON = 9310577
selectName = ["Tyrone", "DeShawn", "Lamar"]


sm.removeEscapeButton()
sm.setSpeakerID(BLUE_DEMON)
sm.setBoxChat()
sm.sendNext("既然你帮我把#r鞋子#k还给了原来的主人。那我晚上就能睡个安稳觉了。")

sm.flipBoxChat()
sm.flipBoxChatPlayerAsSpeaker()
sm.sendNext("对了，#b#p9310577##k你叫什么#r名字#k？")

sm.setSpeakerID(BLUE_DEMON)
sm.setBoxChat()
sm.sendNext("#r名字#k？那是什么东东？")

sm.flipBoxChat()
sm.flipBoxChatPlayerAsSpeaker()
sm.sendNext("嗯……就是别人在称呼你时使用的独一无二的词。我的名字叫#r#h0##k。名字就是用来区分自己和别人的一种称呼。")

sm.sendNext("如果你不介意的话，我来帮你起#r名字#k吧！")

sm.setSpeakerID(BLUE_DEMON)
sm.setBoxChat()
sm.sendNext("嗯……好吧……起得好听点就行！")

sm.flipBoxChat()
sm.flipBoxChatPlayerAsSpeaker()
text = "Hmm, what about I call you...\r\n"
for i in range(len(selectName)):
    text += "#L"+ str(i) +"#"+ selectName[i] +"\r\n"
selection = sm.sendNext(text)

sm.createQuestWithQRValue(62013, selectName[selection])

sm.setSpeakerID(BLUE_DEMON)
sm.setBoxChat()
sm.sendNext( "那么~该起个什么名字呢？适合你的名字……\r\n#L0#猪#l\r\n#L1#姚侯#l\r\n#L2#角铁#l")

sm.flipBoxChat()
sm.flipBoxChatPlayerAsSpeaker()
sm.sendNext("我怎么感觉被戏弄了……帮我起个别的#r名字#k吧。")

sm.setSpeakerID(BLUE_DEMON)
sm.setBoxChat()
sm.sendNext( "嗯……姚侯……？这#r名字#k我喜欢。")

sm.startQuest(parentID)
sm.completeQuest(parentID)
sm.giveExp(1010226)