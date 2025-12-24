# id 22729 (Are Black Cats Unlucky?), field 331001000
sm.setSpeakerType(3)
sm.setParam(37)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(1531001) # Jay
sm.sendNext("Welcome baWHAT IS THAT.")
sm.setInnerOverrideSpeakerTemplateID(1531003) # Nero
sm.sendSay("#face4#Meow!")
sm.lockInGameUI(True, False)
sm.changeBGM("Bgm38.img/LifeIsComedy", 0, 0)
sm.sendDelay(1500)
sm.setInnerOverrideSpeakerTemplateID(1531001) # Jay
sm.sendNext("Y-you brought a CAT in here?! A filthy, disgusting alley cat? It's going to get hair in my cooling fans! Or chew my cables! Or run off with my collector's edition models! Get it OUT of here!")
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendSay("Aww, have a heart, Jay. Look at these little tiny paws. Nero here would be done for on the street. You want that on your conscience?")
sm.setInnerOverrideSpeakerTemplateID(1531003) # Nero
sm.sendSay("#face4#Meow! ")
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendSay("#face2#Here, touch the paws. Touch them.")
sm.setInnerOverrideSpeakerTemplateID(1531001) # Jay
sm.sendSay("#face5#Dude, get the heck away from me! Ugh... FINE. Do what you want. But if it pees on my servers, it's going through a window.")
sm.sendSay("#face5#Did you at least bring back something on the monsters? You know, the thing I ASKED FOR.")
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendSay("#face2#Yeah, chill. It's right here.")
sm.setInnerOverrideSpeakerTemplateID(1531001) # Jay
sm.sendSay("#face6#...Covered in dust and grime, of course. Thanks for wiping it off before bringing it in here.")
sm.sendSay("#face8#You both just... stand over there. Away from me. Good. Let me work.")
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendSay("#face2#Here Nero, come closer and look.")
sm.setInnerOverrideSpeakerTemplateID(1531001) # Jay
sm.sendSay("#face7##fs30#KINESIS!")
sm.blind(True, 255, 0, 0, 0, 500)
sm.sendDelay(500)
sm.blind(True, 255, 0, 0, 0, 0)
sm.sendDelay(1200)
sm.blind(False, 0, 0, 0, 0, 1000)
sm.sendDelay(1400)
sm.sendDelay(3000)
sm.createFieldTextEffect("#fnﾳﾪﾴﾮﾰ￭ﾵ￱ ExtraBold##fs18#The next day, at the hideout", 100, 2500, 4, 0, 0, 1, 4, 0, 0, 0)
sm.completeQuestNoCheck(parentID)
sm.startQuest(11620)
sm.createQuestWithQRValue(15710, "lasttime=19/07/16/05/40")
sm.lockInGameUI(False, True)
