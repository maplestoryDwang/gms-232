# [Shaolin Temple] Investigate the Sutra Repository

WISE_CHIEF_PRIEST = 9310053
ZHEUNG_GUAN = 9310046
BOOK_OF_DEMONS = 4034637

sm.removeEscapeButton()
sm.setSpeakerID(WISE_CHIEF_PRIEST)
sm.setBoxChat()
sm.sendNext("这……妖怪驱散秘药没有什么效果？嗯，看来只剩下那个方法了。")

sm.flipBoxChat()
sm.flipBoxChatPlayerAsSpeaker()
sm.sendNext(" (他看起来一点也不惊讶，似乎从一开始就没抱希望。#b#p9310046##k知道吗……")

sm.sendNext("那个方法？您还有什么妙计吗？")

sm.setSpeakerID(WISE_CHIEF_PRIEST)
sm.setBoxChat()
sm.sendNext("从很久以前开始，我的师父#b老魔僧#k就在研究妖怪。师父比任何人都要了解妖怪。第一个成功在藏经阁设下封印的就是师父。")

sm.flipBoxChat()
sm.flipBoxChatPlayerAsSpeaker()
sm.sendNext("那您的师父现在在哪里呢？我们能得到他的帮助就好了。")

sm.setSpeakerID(WISE_CHIEF_PRIEST)
sm.setBoxChat()
sm.sendNext("他在很久以前就出发去修炼，再也没回来。师父研究妖怪，写下了#b#i4034637##t4034637##k。那本书就应该保存在藏经阁。")

response = sm.sendAskYesNo("#h0#能帮我去找一找吗？我相信你。")

if response:
    sm.sendNext("谢谢。在#b#i4034637##t4034637##k里似乎有能够消灭妖怪的线索。请你尽快找到它。如果放任妖怪继续兴风作浪，不光是嵩山镇，整个世界都会遭殃。")

    sm.flipBoxChat()
    sm.flipBoxChatPlayerAsSpeaker()
    sm.sendNext("但是，#b#p9310053##k为什么没有继承师父的研究呢？")

    sm.setSpeakerID(WISE_CHIEF_PRIEST)
    sm.setBoxChat()
    sm.sendNext("#fs20#我如果能再见到师父，最想问的问题就是这个。")

    sm.sendNext("#fs20#我一生都活在师父#b老魔僧#k的阴影下！但是，#b师父#k什么都没留给我。也许他根本没把我当做弟子来看。")

    sm.sendNext("啊……请你把我刚才那些话都忘了，快去找#b妖怪之书#k吧。")
    sm.startQuest(parentID)