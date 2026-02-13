# [Shaolin Temple] Thef Chief Priest's Disappearance...

ZHEUNG_GUAN = 9310046
WISE_CHIEF_PRIEST = 9310053
ELDER_JUNG = 9310049

sm.removeEscapeButton()
sm.setSpeakerID(ZHEUNG_GUAN)
sm.setBoxChat()
sm.sendNext("真没想到#p9310053#竟然是那些妖怪的头目。亏我一直信任他，跟随他到现在。我真是瞎了眼啊。")

sm.flipBoxChat()
sm.flipBoxChatPlayerAsSpeaker()
sm.sendNext("你没有必要自责。我现在倒是非常担心突然消失不见的#p9310053#。而且现在，这里还有很多妖怪出没。")

sm.setSpeakerID(ZHEUNG_GUAN)
sm.setBoxChat()
sm.sendNext("多亏了你，问题才得以解决。真是太谢谢你了。剩下的事情就交给我们吧。只要我的[妖怪驱散秘药]能研究成功……！")

sm.flipBoxChat()
sm.flipBoxChatPlayerAsSpeaker()
sm.sendNext("呃，我建议你还是不要进行那个研究了。总之，我只信赖#p9310046#。")

sm.setSpeakerID(ZHEUNG_GUAN)
sm.setBoxChat()
sm.sendNext("对了，这里已经暂时由#p9310049#代替#p9310053#进行管理。他好像有话要对你说。")
sm.completeQuest(parentID)
sm.completeQuestNoRewards(62037)
sm.giveExp(2020453)