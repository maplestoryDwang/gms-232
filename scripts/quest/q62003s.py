# [Shaolin Temple] Chief Priest's Woes

WISE_CHIEF_PRIEST = 9310053
sm.removeEscapeButton()
sm.setSpeakerID(WISE_CHIEF_PRIEST)
sm.setBoxChat()
sm.sendNext("这……妖怪已经到了嵩山镇，大事不妙啊！")

sm.flipBoxChat()
sm.flipBoxChatPlayerAsSpeaker()
sm.sendNext("郑长老说，#b#p9310053##k知道村子里发生那些怪事的原因。不过，这里的情况看上去更糟……这是怎么回事？")

sm.setSpeakerID(WISE_CHIEF_PRIEST)
sm.setBoxChat()
sm.sendNext("其实，在很久之前，藏经阁里的妖怪解除了封印。那时，我们少林寺虽然成功地重新封印了妖怪，但偶尔还是会有妖怪逃出去袭击村民。")

sm.sendNext("即便如此，在我的佛珠和人们的祈祷作用下，事情都很快得到了解决。")

sm.sendNext("可是最近，有无数妖怪解开了封印，从这里逃了出去。在我看来，还是藏经阁出了问题。你看到我的身后了吗？妖怪们的气息就像烟雾一样到处蔓延。")

sm.sendNext("百闻不如一见。你去大雄宝殿看看吧。")
sm.startQuest(parentID)