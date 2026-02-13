# [Ellinel Fairy Academy] You Can Do It

FANZY = 1500010 # NPC ID
YOU_CAN_DO_IT = 32102 # QUEST ID

sm.setSpeakerID(FANZY)
sm.sendNext("你问这里是哪里？你连这里是哪里都不知道就跟来了吗？\r\n这里是通往#b妖精学院艾利涅#k的森林深处。")

sm.setPlayerAsSpeaker()
sm.sendSay("没错，#b艾利涅#k是多年来教导妖精孩童们魔法的一种教育机构。")

sm.setSpeakerID(FANZY)
sm.sendSay("那为什么要藏在这种森林深处啊？")

sm.setPlayerAsSpeaker()
sm.sendSay("看你的表情，还真是一无所知的样子，你知道#b魔法密林#k原本曾是妖精的村庄吗？在数百年前和黑魔法师爆发过一场大型战争之后，人类进来开垦了村庄，便有了现如今的#b魔法密林#k。\r\n")

sm.setSpeakerID(FANZY)
sm.sendSay("那么魔法密林外面也有妖精生活的地方咯。")

sm.setPlayerAsSpeaker()
sm.sendSay("虽然也有一些愿意接受人类的妖精，但还是有很多并非如此相对保守的妖精，#b妖精学院艾利涅#k也曾如此。他们拒绝与人类为伍，独自消失在夜的领域中，而且为了拒绝外人的出入，他们还建在了湖的对面。\r\n")

sm.setSpeakerID(FANZY)
sm.sendSay("你的意思是说魔法师库迪被那些艾利涅的妖精生擒了吗？")

sm.setPlayerAsSpeaker()
sm.sendSay("没错，我也完全没有搞明白这到底是怎么一回事，虽然#b汉斯#k和我曾经多次尝试去联系，但他们很讨厌我们，并不听我们说话。所以我们需要你的帮忙，\r\n不过#b#h0##k，你游泳游得好吗？")

sm.setSpeakerID(FANZY)
response = sm.sendAskAccept("你先游到湖对面怎么样？相信你应该能做到！鼓起勇气跃入水中吧！\r\n#b(度过右边的湖。)#k")

if response:
    sm.sendNext("妖精学院艾利涅？")
    sm.startQuestNoCheck(YOU_CAN_DO_IT)
sm.dispose()
