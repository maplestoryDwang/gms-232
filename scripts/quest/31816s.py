# id 31816 (Dispatch Mission), field 401000001
sm.setSpeakerID(3001000) # Edea
sm.sendNext("Did you meet with Harpoon?")
sm.sendSay("This gives me an idea. There is an old cabin in the Lush Forest northeast of here...")
sm.sendSay("A old man named #b#p3001002##k lives there. He is known to be a sage, well-learned in the past.")
sm.sendSay("He's a grumpy old coot at the best of times, but he is... wise. He's even been known to be helpful on occasion. I want you to visit #b#p3001002##k and ask for his advice.")
sm.setParam(2)
sm.sendSay("Did you guys used to have a thing...")
sm.setParam(0)
res = sm.sendAskAccept("What? Disgusting! Get out of here and go talk to #b#p3001002##k. The things you people say...")
sm.sendNext("Go, and tell him that #b#p3001000##k sent you. And take a picture of his face when he hears that!")
sm.startQuest(parentID)
sm.warp(401020100)
