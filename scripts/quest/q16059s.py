#
# author bakery shutdown halp
# npc Dame Appropiation - Legion Manager
# quest [Legion] Introducing Legion
#
DAME = 9010106
sm.setSpeakerID(DAME)
if chr.getLevel() < 60:
    sm.sendSayOkay("你好，#b勇士#k！很高兴见到你～\r\n你超过60级啦？")
else:
    sm.completeQuestNoRewards(16059)
    sm.sendNext("你是哪位？")
    sm.setPlayerAsSpeaker()
    sm.sendSay("我是#b#e会计小姐#n#k。\r\n\r\n为了帮助超过#r60级#k的冒险岛世界勇士们成长，我们正在推进#r新的项目#k。")
    sm.setSpeakerID(DAME)
    sm.sendSay("通过该项目，勇士们可以获得#e#r非常好的奖励#k#n。\r\n你想听我介绍一下吗？")
    sm.sendSay("经过漫长的旅行，我发现了一座#b岛#k。\r\n那里有很多#r可怕的龙#k。\r\n我小心翼翼地躲开那些#b龙#k，想要从岛上离开……\r\n\r\n啊，但是！有一头#r像房子一样大的龙#k挡在了我的面前！")
    sm.sendSay("大吃一惊的我当场就呆住了……\r\n这时候！不知从哪里突然冒出了许多的勇士，大家齐心协力，一瞬间就将#r巨龙#k给打败了！")
    sm.sendSay("然后大家将龙掉落的#b大量的战利品#k也一并分走了，这些勇士之中，既有看上去异常强大的人，也有一些并非如此。")
    sm.sendSay("看到它的瞬间，我突然明白了。\r\n为什么我们无法继续成长！")
    sm.sendSay("#e那便是因为！#n\r\n我们是独自一人。不管如何强大，孤身一人的勇士也难以击退那么强壮和庞大的龙，而正因为他们#b齐心协力#k，才能轻易将龙拿下。")
    sm.sendSay("我认为冒险岛世界勇士#r要想变得更强#k，#b合作精神#k是必不可少的。\r\n因此我决定果断放下过去的工作，开始推进#b新的项目#k。")
    sm.sendSay("那个项目的名字就是#b#e<冒险岛联盟>#n#k！\r\n\r\n我想让在#r独自成长#k过程中遇到瓶颈的勇士们明白#b协作的力量#k，帮助他们更快地成长。")
    sm.sendSay("勇士！\r\n你想和我一起打造一个强大的#b#e<冒险岛联盟>#k#n吗？")
    sm.sendSay("请稍等一下。\r\n我马上做好创建<冒险岛联盟>的准备！")
    sm.sendSay("Give me just a moment. \r\nI'll make preparations to create a Legion!")