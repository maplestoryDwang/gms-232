# 3138 - Desolate Moor | Lionheart questline
sm.setPlayerAsSpeaker()
sm.sendNext("Who's sending me letters? I don't think I gave anybody my address...")
sm.setSpeakerID(2161012)
sm.sendNext("Hey. \r\n\r\n\r\n I'm #b#p2161012##k, one of the Silent Crusaders. I don't like talking all flowery, so I'll get right to it. The Silent Crusade takes down bad guys and monsters. That's what I do.")
sm.sendNext("The #rLion King's Castle#k is full of something nasty right now. Overflowing with it. I'd take the cold winds of El Nath over thse dark chills any day.")
if sm.sendAskYesNo("I need some help out here. A lot of good people are having a hard time. Keep reading, if you're interested."):
    sm.sendNext("If you read this page, you ain't a chicken. I appreciate that. It also means I'll be seeing you in about 30 seconds, because I infused this letter with magic.")
    sm.startQuest(parentID)
    sm.warp(211060000)