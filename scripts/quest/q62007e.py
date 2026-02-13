# [Shaolin Temple] Investigate the Sutra Repository

BOOK_OF_DEMONS = 4034637
WISE_CHIEF_PRIEST = 9310053

sm.removeEscapeButton()
sm.setSpeakerID(WISE_CHIEF_PRIEST)
sm.setBoxChat()
sm.sendNext("#fs20#哦哦……！！！你终于找到了#b#t4034637##k！你看过这本书了吗？")

sm.flipBoxChat()
sm.flipBoxChatPlayerAsSpeaker()
sm.sendNext("没有，我一拿到手就赶了过来，没有打开。难道有什么问题……？")

sm.setSpeakerID(WISE_CHIEF_PRIEST)
sm.setBoxChat()
sm.sendNext("啊，没什么，太，太好了……太好了，哈哈哈。\n那你现在可以回去了。剩下的事情就交给我来处理吧。")

sm.completeQuest(parentID)
sm.giveExp(3030679)
sm.consumeItem(BOOK_OF_DEMONS)
sm.flipBoxChat()
sm.flipBoxChatPlayerAsSpeaker()
sm.sendNext("(#b#p9310053##k急忙离开了。难道那本书里真的有能够消灭妖怪的妙计？他看到书的时候，似乎非常高兴。)")

sm.sendNext("(反正我该做的事情已经做完了，还是去和#b妖怪三人帮#k道个别吧。去\n#r藏经阁秘密书库#k看看吧。)")
sm.chatScript("去到[藏经阁秘密书库]和妖怪们说再见吧.")