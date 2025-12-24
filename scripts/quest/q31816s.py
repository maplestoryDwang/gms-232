# 31816 | Magnus Questline
sm.setSpeakerID(3001000)
sm.sendNext("Did you meet with Harpoon?")
sm.sendNext("This gives me an idea. There is an old cabin in the Lush Forest northeast of here...")
sm.sendNext("A old man name #b#p3001002##k lives there. He is known to be a sage, well-learned in the past.")
sm.sendNext("He's a grumpy old cool at the best of times, but he is... wise. He's even been known to be helpful on occasion. I want you to visit #b#p3001002##k and ask for his advice.")
sm.setPlayerAsSpeaker()
sm.sendNext("Did you guys use to have a thing...?")
sm.setSpeakerID(3001000)
if sm.sendAskYesNo("What? Disgusting! Get out of here and go talk to #b#p3001002##k. The things you people say..."):
    sm.sendNext("Go, and tell him that #b#p3001000##k sent you. And take a picture of his face when he hears that!")
    sm.startQuest(parentID)
    sm.warp(401020100)