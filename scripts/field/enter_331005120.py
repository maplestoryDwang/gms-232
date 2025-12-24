# id 331005120 (null), field 331005120
sm.lockInGameUI(True, False)
sm.removeAdditionalEffect()
sm.hideUser(True)
sm.blind(True, 255, 0, 0, 0, 0)
sm.zoomCamera(0, 1000, 0, 645, -260)
sm.blind(True, 255, 0, 0, 0, 0)
sm.sendDelay(1200)
sm.blind(False, 0, 0, 0, 0, 1000)
sm.sendDelay(1400)
sm.setSpeakerType(3)
sm.setParam(37)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(1531001) # Jay
sm.sendNext("I've located Kinesis.")
sm.setInnerOverrideSpeakerTemplateID(1531002) # Yuna
sm.sendSay("#face3#Really?")
sm.setInnerOverrideSpeakerTemplateID(1531001) # Jay
sm.sendSay("#face1#Yes. He's in the sinkhole.")
sm.setInnerOverrideSpeakerTemplateID(1531002) # Yuna
sm.sendSay("#face4#...What? That's not possible. The sinkhole destroyed everything!")
sm.setInnerOverrideSpeakerTemplateID(1531001) # Jay
sm.sendSay("#face0#I don't think so. It's not destroyed. It's missing.")
sm.setInnerOverrideSpeakerTemplateID(1531002) # Yuna
sm.sendSay("#face4#That makes even LESS sense! What are you jerks hiding from me?")
sm.setInnerOverrideSpeakerTemplateID(1531001) # Jay
sm.sendSay("#face1#Yuna, we... Look, we're not just playing at being heroes here. Something is happening to world. This sinkhole thing isn't just happening here.")
sm.setInnerOverrideSpeakerTemplateID(1531002) # Yuna
sm.sendSay("#face3#It... it's not? What does that even mean?")
sm.setInnerOverrideSpeakerTemplateID(1531001) # Jay
sm.sendSay("#face1#It means that parts of the Earth are disappearing all over. Our world is being... I don't know, ABSORBED by another.")
sm.sendSay("#face1#It all seems like random events right now, but if my projections are correct... and they ARE, Earth is going to vanish into parts unknown in the near future.")
sm.blind(True, 255, 0, 0, 0, 250)
sm.sendDelay(250)
sm.onLayer(1000, "cube", 0, 0, 12, "Map/Effect2.img/kinesis/cube", 4, False, -1, False)
sm.sendDelay(1500)
sm.sendNext("#face1#And in the midst of all this, Kinesis got their powers.")
sm.sendSay("#face1#Think about that. Forces begin destroying our world at the same time Kinesis gets control over the fundamental forces of the universe.")
sm.setInnerOverrideSpeakerTemplateID(1531002) # Yuna
sm.sendSay("So... all this secrecy and heroics... it wasn't just to stroke Kinesis's ego?")
sm.setInnerOverrideSpeakerTemplateID(1531001) # Jay
sm.sendSay("#face1#Well... probably a little. But the main goal was gathering data. Data on what's tearing the planet apart... and if it's the same power that Kinesis controls.")
sm.offLayer(300, "cube", False)
sm.blind(True, 255, 0, 0, 0, 0)
sm.sendDelay(300)
sm.blind(False, 0, 0, 0, 0, 250)
sm.sendDelay(300)
sm.setInnerOverrideSpeakerTemplateID(1531002) # Yuna
sm.sendNext("#face2#I had no idea... #b#h0##k never said a word about this.")
sm.setInnerOverrideSpeakerTemplateID(1531001) # Jay
sm.sendSay("Well, K hates it when people worry.")
sm.setInnerOverrideSpeakerTemplateID(1531002) # Yuna
sm.sendSay("#face2##b#h0##k... Wherever you are, please come back safe.")
sm.blind(True, 255, 0, 0, 0, 500)
sm.sendDelay(500)
sm.hideUser(False)
sm.lockInGameUI(False, True)
sm.warp(101020400)
