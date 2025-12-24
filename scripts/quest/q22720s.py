# id 22720 (Jay's Gripe), field 331001000
sm.lockInGameUI(True, False)
sm.setSpeakerType(3)
sm.setParam(37)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(1531001) # Jay
sm.sendNext("The system is running smoothly, and all the errors are cleared. I'll compile the data and then we can decide our next move.")
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendSay("You sure you don't need to start upgrading again? I'm going to outpace your system before you know it.")
sm.setInnerOverrideSpeakerTemplateID(1531001) # Jay
sm.sendSay("You keep saying that like you know anything about my rig. Nobody runs a better system than me. You stick to mind crushing and being pretty.")
sm.sendSay("...Which reminds me, are you EVER going to start covering your face when you do the superhero thing? It's the digital age, dude. Even my blender has a 15 megapixel camera.")
res = sm.sendNext("Seriously, are you going to cover your face?\r\n#b\r\n#L1#Eh. Too much trouble.#l\r\n#L2#I don't have time to suit up in an emergency.#l\r\n#L3#I'm too handsome, I can't deny the world this face.#l")
sm.createQuestWithQRValue(parentID, "done=1")
sm.sendNext("...I figured you'd say that. You really don't take this serious enough.")
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendSay("Fine. Give me your kitty mask. I was thinking about changing my name to Captain Fuzzums anyway.")
sm.setInnerOverrideSpeakerTemplateID(1531001) # Jay
sm.sendSay("How do you know about Captain... Dude, stop reading my fanfic! In fact, just stay away from all my stuff. No stuff for you!")
sm.playSound("Sound/SoundEff.img/PvP/80001740_Use", 100)
sm.onLayer(500, "0", 800, 0, 12, "Map/Effect2.img/kinesis/chaJay", 5, True, -1, False)
sm.moveLayer(300, "0", -800, 0)
sm.sendDelay(5000)
sm.playSound("Sound/SoundEff.img/12thMS/jump_m", 100)
sm.offLayer(500, "0", False)
sm.moveLayer(300, "0", 800, 0)
sm.sendDelay(1000)
sm.sendNext("You're already in trouble with #bYuna#k, you know. She stopped by while you were gone and told me to give you this.")
sm.startQuest(parentID)
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendSay("Great, Student Council minutes. The highlight of my day.")
sm.setInnerOverrideSpeakerTemplateID(1531001) # Jay
sm.sendSay("That's what you get for being president, hotshot. Yuna's surely waiting for you at school. I can track her Rage Gauge as you make her wait, if you want.")
sm.sendSay("School is right there, dude. Go out and hang a right. Don't make her any angrier than she already is. It's not cute.")
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendSay("#b(Go outside and find Yuna.)#k")
sm.sendDelay(1000)
sm.lockInGameUI(False, True)
