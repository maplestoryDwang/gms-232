# [Root Abyss] Root Ruckus 1

MYSTERIOUS_GIRL = 1064001 # npc Id
sm.setSpeakerID(MYSTERIOUS_GIRL)
sm.sendNext("怎么才能从这里出去呢？")

sm.setPlayerAsSpeaker()
sm.sendNext("那边有个通往外面的出口。只要通过出口出去就行。")

sm.setSpeakerID(MYSTERIOUS_GIRL)
sm.sendNext("我已经试过好几次了，但是没办法出去。")

sm.setPlayerAsSpeaker()
sm.startQuest(parentID)
sm.sendNext("没办法出去？出口堵住了吗？知道了，我去试试看。")

sm.setSpeakerID(MYSTERIOUS_GIRL)
sm.sendNext("快去帮我确认一下。我真的很想出去……")
sm.dispose()