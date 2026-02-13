# [Stone Colossus] Colossal Clean Up 4

UNKNOWN_PERSON = 2210009 #     Npc Name = ???

sm.flipDialoguePlayerAsSpeaker()
sm.sendNext("女神的宠物竟然变成了如此邪恶凶暴的怪物……？")

sm.setSpeakerID(UNKNOWN_PERSON)
sm.flipSpeaker()
sm.sendSay("呵呵呵……这只是开始。以后的事情更值得期待。")

sm.flipDialoguePlayerAsSpeaker()
sm.sendNext("#b(可疑的人的声音顺着风消失在了远方……)#k")

sm.warpInstanceOut(240092300, 2) # Stone Colossus Torso 2
sm.completeQuest(parentID)

sm.removeEscapeButton()
sm.startQuest(31349) #  [Stone Colossus] Colossal Clean Up 5
sm.sendSayOkay("I should check on the Stone Colossus!")