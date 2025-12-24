# id 34256 ([Morass] A Frightening Rumor 2), field 993017200
sm.setSpeakerType(3)
sm.setParam(36)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(3003412) # Woman
sm.sendNext("#face0#Oh, hello!")
sm.sendSay("#face0#Yes, there was a survivor. I'd be happy to tell you, but...")
sm.sendSay("#face0#Would you mind doing me a favor first? ")
sm.setParam(56)
sm.sendSay("A favor?")
sm.setParam(36)
sm.sendSay("#face0#Yes, please. I'm really in a fix, and that lazy guard there is no help at all. Would you teach the #bStrong Gangsters#k a lesson about manners?\r\nThey always cause trouble around here, and it's really hurting my business.")
sm.setInnerOverrideSpeakerTemplateID(3003451) # Soldier
sm.sendSay("#face0#Who're you calling lazy?! I told you, my old knee injury is getting to me today!")
sm.setInnerOverrideSpeakerTemplateID(3003412) # Woman
sm.sendSay("#face0#Don't you play the helpless victim with me! It seemed just fine this afternoon when you chased down that vendor and 'rescued' a meat pie from him! If only my problem was having too many meat pies on my hands...")
res = sm.sendAskYesNo("Will you please help me out, Shey?")
sm.sendNext("#face0#Thank you! Teach around 200 #bStrong Gangsters#k some manners.\r\nThey like to loiter around #bBully Blvd. 3#k like a bunch of hoodlums.")
sm.setInnerOverrideSpeakerTemplateID(3003451) # Soldier
sm.sendSay("#face0#Thanks for helping out, Shey! I'd do it myself, you know, but my back... it's just really been a problem lately.")
sm.setInnerOverrideSpeakerTemplateID(3003412) # Woman
sm.sendSay("#face0#Oh, quit your bellyaching! Shey's already agreed to do your job for you.")
sm.startQuest(parentID)
sm.warp(450006160)
