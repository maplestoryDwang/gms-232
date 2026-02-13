# [Shaolin Temple] But Everyone Else Has Nice Shoes

TOWN_MISCREANT = 9310580
KID_SHOES = 4034657

sm.removeEscapeButton()
sm.setSpeakerID(TOWN_MISCREANT)
sm.setBoxChat()
sm.sendNext("#fs20#啊！这是我的鞋子，昨晚被#r可怕妖怪#k偷走了！")

sm.flipBoxChat()
sm.flipBoxChatPlayerAsSpeaker()
sm.sendNext("#r可怕妖怪#k？你见过妖怪？")

sm.setSpeakerID(TOWN_MISCREANT)
sm.setBoxChat()
sm.sendNext("嗯！！#r长有一百多个角的可怕妖怪#k！")

sm.sendNext("虽然我没见到过……可人们都这么说！而且，妖怪会把所穿鞋子尺寸与它相符的孩子抓走……太可怕了。")

sm.flipBoxChat()
sm.flipBoxChatPlayerAsSpeaker()
sm.sendNext("不过，世界上也有一些不可怕的善良的妖怪。这双鞋就是它出于好奇才带走的，它拜托我把鞋子还给原来的主人，还说再也不会瞎捣蛋了。所以你不必害怕。")

sm.setSpeakerID(TOWN_MISCREANT)
sm.setBoxChat()
sm.sendNext("(#p9310577#听到这个消息会非常高兴吧。那么快点去 #m701220350#吧。)")

sm.consumeItem(KID_SHOES)
sm.giveExp(2020453)
sm.completeQuestNoRewards(parentID) # completeQuest didn't work for w/e reason.
sm.warp(701220350)
