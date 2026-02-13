# [Shaolin Temple] Demon-iority Complex

GOBLIN_DEMON = 9310578
DABAO = 9310034
MAHAVIRA_HALL = 701220000

sm.removeEscapeButton()
sm.setBoxChat()
sm.flipBoxChat()
sm.flipBoxChatPlayerAsSpeaker()
sm.sendNext("不过，#b#p9310578##k为什么总是戴着面具啊？不热么？")

sm.setSpeakerID(GOBLIN_DEMON)
sm.setBoxChat()
sm.sendNext("呃呃……呃呃……这可不是面具，而是我的脸！！呃呃……呃呃……我的脸又大又丑，真是难为情啊！！")

sm.sendNext("人类看到我就吓得逃跑了。我可没想着要伤害他们啊……呃呃")

sm.sendNext("我也想拥有和人类一样的柔软肌肤和黑色眼珠。那样的话，人们就会好好对待我吧！")

sm.flipBoxChat()
sm.flipBoxChatPlayerAsSpeaker()
sm.sendNext("我有个不错的主意。")

sm.setSpeakerID(GOBLIN_DEMON)
sm.setBoxChat()
sm.sendNext("是什么？")

sm.flipBoxChat()
sm.flipBoxChatPlayerAsSpeaker()
sm.sendNext("戴个面具吧，如何？虽然你现在的样子也挺可……可爱的！但如果戴上面具的话，你就不必在人类面前畏畏缩缩，也不用担心吓跑人类了。")

sm.setSpeakerID(GOBLIN_DEMON)
sm.setBoxChat()
response = sm.sendAskYesNo("真的……可以吗？那你能不能帮我找来一个#b人类容貌的面具#k呢？")

if response:
    sm.flipBoxChat()
    sm.flipBoxChatPlayerAsSpeaker()
    sm.sendNext("要想制作人脸面具，那就最好去找#p9310034#。他应该知道相关的方法。前往#m701220000#寻找#p9310034#吧。")

    sm.startQuest(parentID)