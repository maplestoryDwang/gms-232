# 25825 - [Job Advancement] Agent of Justige (AB 2nd job adv)

ESKALADE_NPC_ID = 3000132

sm.setSpeakerID(ESKALADE_NPC_ID)
if chr.getLevel() >= 100 and chr.getJob() == 6511:
    sm.sendNext("#h0#，你在认真修炼啊？")
else:
    sm.dispose()

sm.setSpeakerID(ESKALADE_NPC_ID)
sm.setPlayerAsSpeaker()
sm.sendNext("嗯，我能帮助那么多的人，得到他们的喜爱，真开心。")
sm.sendNext("(呃……这孩子真善良……)嗯，你的想法很积极向上。我有个建议给你，要不要听听？")
sm.sendNext("你突然那么一本正经的，让人好紧张。是什么建议？")
sm.sendNext("越看越吓人额？哈哈哈。")
sm.sendNext("真被你打败了。行了，说说正题吧。咱俩被强制结成契约有一段时间了吧，现在应该可以缔结额外契约了。")
sm.sendNext("额外契约？")
sm.sendNext("第一次契约不是我们自己决定的，而是受到命运的指引。但额外的契约必须要你我都同意才能缔结。")
sm.sendNext("呃……是粉红色又要加深了吗？不过要是能获得帮助更多人的力量，粉红色我忍了。")
sm.sendNext("那么就建立额外契约咯！你必须跟我同时缔结契约，集中精神吧？")
response = sm.sendAskYesNo("为了大家，我要变强！！！")
if response:
    sm.sendSayOkay("我一直都很正经的。")
else:
    sm.dispose()

sm.jobAdvance(6512)
sm.giveNewSecondary(1352604)
