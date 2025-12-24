# id 22740 (A Whole New World), field 101020400
sm.lockInGameUI(True, False)
sm.removeAdditionalEffect()
sm.blind(True, 255, 0, 0, 0, 500)
sm.sendDelay(500)
sm.zoomCamera(0, 2000, 0, -144, 50)
sm.forcedFlip(True)
sm.blind(True, 255, 0, 0, 0, 0)
sm.sendDelay(1200)
sm.blind(False, 0, 0, 0, 0, 1000)
sm.sendDelay(1400)
sm.setSpeakerType(3)
sm.setParam(37)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendNext("Where am I? Who are you?")
sm.setInnerOverrideSpeakerTemplateID(1531004) # Three Moon
sm.sendSay("I am the third child of the moon, hero of another world.")
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendSay("That... you... what?")
sm.setInnerOverrideSpeakerTemplateID(1531004) # Three Moon
sm.sendSay("Steady yourself. You are yet unharmed.")
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendSay("#face0##r#fs25#...A talking dog?!")
sm.setInnerOverrideSpeakerTemplateID(1531004) # Three Moon
sm.sendSay("......")
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendSay("#face2#Oh, wait, wolf. Sorry.")
sm.sendSay("What is this place? I thought I was on the subway. Am I dreaming all this?")
sm.setInnerOverrideSpeakerTemplateID(1531003) # Nero
sm.sendSay("#face4#Nope! Welcome to Maple World!")
sm.spawnNpc(1531010, -45, 0)
sm.showNpcSpecialActionByTemplateId(1531010, "summon", 0)
sm.moveNpcByTemplateId(1531010, True, 80, 100)
sm.sendDelay(500)
sm.sendNext("#face4#Er, it's pretty different from your world. We better get you adjusted quick.")
sm.sendSay("#face4#Here, watch this.")
sm.sendDelay(500)
sm.showEffect("Effect/BasicEff.img/pang", 0, -145, 50, 0, 0, 1, 0)
sm.playSound("Kite/Crown", 100)
sm.spawnNpc(1531003, -145, 0)
sm.showNpcSpecialActionByTemplateId(1531003, "summon", 0)
sm.sendDelay(500)
sm.sendNext("#face0#Did you see that? That was magic.")
sm.sendSay("#face0#Pretty sure you don't have that in your world! Heh.")
sm.sendDelay(500)
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendNext("So I'm not dreaming...")
sm.setInnerOverrideSpeakerTemplateID(1531003) # Nero
sm.sendSay("#face0#Again, nope! Lemme officially introduce myself. I am #bNella Medionel Roonia.")
sm.sendSay("#face0#In our ancient tongue, it means half-child of the sacred moonlight. See, I'm from a real big-deal magician family...")
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendSay("#face2##fs20#What on Earth are you talking about, Nero?")
sm.setInnerOverrideSpeakerTemplateID(1531003) # Nero
sm.sendSay("#face2#Hey hey hey HEY! I'm not Nero!")
sm.sendDelay(1000)
sm.playSound("Sound/SoundEff.img/PvP/80001740_Use", 100)
sm.onLayer(500, "0", 800, -120, 12, "Map/Effect2.img/kinesis/chaNero", 5, True, -1, False)
sm.moveLayer(300, "0", -800, 0)
sm.sendDelay(5000)
sm.playSound("Sound/SoundEff.img/12thMS/jump_m", 100)
sm.offLayer(500, "0", False)
sm.moveLayer(300, "0", 800, 0)
sm.sendDelay(1000)
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendNext("Cute. Look, Nero, I need to know where I am and how to get back.")
sm.setInnerOverrideSpeakerTemplateID(1531003) # Nero
sm.sendSay("#face0#HEY. We saved you. So shut your facehole and listen for a minute!")
sm.sendDelay(500)
sm.sendNext("#face0#Do you remember what happened with the #bwhite-haired man#k?")
sm.sendSay("#face0#I should have followed you... stopped you, maybe... It was my fault. I thought being near you would allow me to tail you easily. But I wasn't able to keep up.")
sm.sendSay("#face0#Regardless, you're here now. And we need to keep you here.")
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendSay("Hey, Nero? I have no idea what you're talking about.")
sm.setInnerOverrideSpeakerTemplateID(1531003) # Nero
sm.sendSay("#face0#Fine, FINE! My teacher, #bGrendel the Really Old#k, is on his way. He's old and smart-looking, so maybe you'll listen to him. Just sit tight.")
sm.sendDelay(500)
sm.showFadeTransition(0, 1000, 3000)
sm.zoomCamera(0, 1000, 2147483647, 2147483647, 2147483647)
sm.moveCamera(True, 0, 0, 0)
sm.sendDelay(300)
sm.removeOverlapScreen(1000)
sm.lockInGameUI(False, True)
sm.completeQuestNoCheck(parentID)
sm.completeQuestNoCheck(parentID)
sm.startQuest(11620)
sm.createQuestWithQRValue(15710, "lasttime=19/07/16/05/46")
