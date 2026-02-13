# [Shaolin Temple] Making a Mask

DABAO = 9310034

sm.removeEscapeButton()
sm.setSpeakerID(DABAO)
sm.setBoxChat()
sm.sendNext("请问，你能不能帮我制作面具呢？")

sm.flipBoxChat()
sm.flipBoxChatPlayerAsSpeaker()
sm.sendNext("凭我的手艺，没有做不了的东西！你想要什么样的面具？")

sm.setSpeakerID(DABAO)
sm.setBoxChat()
sm.sendNext("那个……如果你能帮我制作一个帅哥脸型的面具，那就太好了。")

sm.flipBoxChat()
sm.flipBoxChatPlayerAsSpeaker()
sm.sendNext("嗯……你要这种面具做什么？居然要做人脸面具，而不是动物的面具。我可是第一次接到这种委托。你是不是想欺骗别人，所以才想做这种面具啊？")

sm.setSpeakerID(DABAO)
sm.setBoxChat()
sm.sendNext("我向你保证，我不是用来做坏事的！拜托你了。")

sm.flipBoxChat()
sm.flipBoxChatPlayerAsSpeaker()
sm.sendNext("嗯……既然你这么诚恳，那我就帮你做吧。")

sm.setSpeakerID(DABAO)
sm.setBoxChat()
sm.sendNext("啊……不过还缺一种材料。藏经阁仓库里存放着柔软的皮革，不过全被散发银光的妖怪偷走了！")

sm.sendNext("你若能从它们那里搜集到30个柔软皮革，我就能为你制作一个面具。你能做到吗？")

sm.sendNext("(散发银光的话……那应该是被#o9600022#或#o9600024#偷走了吧。快前往藏经阁吧。)")
sm.startQuestNoCheck(parentID)