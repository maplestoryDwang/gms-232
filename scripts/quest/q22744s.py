# id 22744 (President Present), field 101020400
sm.setSpeakerType(3)
sm.setParam(37)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(1531012) # Grendel the Really Old
sm.sendNext("You must be Kinesis. I am Grendel the Really Old, president of the Magician Association.")
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendSay("#face2#Oh man, thank goodness. Maybe you can help me get all this straight...")
sm.setInnerOverrideSpeakerTemplateID(1531012) # Grendel the Really Old
sm.sendSay("I imagine so. I just came from that enormous sinkhole you were in.")
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendSay("#face0#Wait, what? Sinkhole? So... I wasn't imagining that?")
sm.setInnerOverrideSpeakerTemplateID(1531012) # Grendel the Really Old
sm.sendSay("Indeed. I will be completely honest with you. The White Mage of your world used your powers to create a sinkhole in your city.")
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendSay("#face0#...!!")
sm.setInnerOverrideSpeakerTemplateID(1531012) # Grendel the Really Old
sm.sendSay("By the stunned look on your face, I assume you have many questions. I will answer them as best I can.")
res = sm.sendNext("What else are you curious about?\r\n#b\r\n#L1#What is the Magician Association?#l\r\n#L2#Why did you bring me here?#l\r\n#L3#What do you know about my powers?#l\r\n#L4#Who is the White Mage and what does he want?#l\r\n#L5#How bad is the damage from the sinkhole?#l\r\n#L6#Are Yuna and Jay safe?#l\r\n#L7#I have nothing else to ask about.#l")
sm.sendNext("Hundreds of years ago, the magicians of Maple World learned a hard lesson when the evil Black Mage ravaged our lands. Knowledge of magic must be shared and preserved if we are to survive the many threats to our world.")
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendSay("#b(Black Mage? Sounds even more evil than the White Mage. Wonder if they're related?)")
sm.setInnerOverrideSpeakerTemplateID(1531012) # Grendel the Really Old
sm.sendSay("Therefore, the magicians of Maple World came together to create an organization where their research can be shared with all. That organization is the Magician Association.")
sm.sendSay("I have many apprentices, and the child you call Nero is one of them.")
sm.sendSay("Once we became aware of your world, we sent magicians to keep tabs on it. Nero was chosen to watch over your city.")
sm.setInnerOverrideSpeakerTemplateID(1531003) # Nero
sm.sendSay("#face2#Uh, sir? You just called me Nero... ")
sm.setInnerOverrideSpeakerTemplateID(1531012) # Grendel the Really Old
res = sm.sendNext("What else are you curious about?\r\n#b\r\n#L2#Why did you bring me here?#l\r\n#L3#What do you know about my powers?#l\r\n#L4#Who is the White Mage and what does he want?#l\r\n#L5#How bad is the damage from the sinkhole?#l\r\n#L6#Are Yuna and Jay safe?#l\r\n#L7#I have nothing else to ask about.#l")
sm.sendNext("I wish that I could send you back immediately, but the risk is simply too great.")
sm.sendSay("Unless you have complete mastery of your powers, the sinkhole will draw from them and continue to expand.")
sm.sendSay("Stay here and train. That is the best thing you can do for yourself right now.")
sm.sendSay("This isn't much, but you should take it. Your shoes won't last long in this world, I think. They don't look appropriate for the sand and mud and rocks.\r\n\r\n#b#i1072019# #t1072019#")
sm.completeQuestNoCheck(parentID)
sm.completeQuestNoCheck(parentID)
sm.startQuest(11620)
sm.createQuestWithQRValue(15710, "lasttime=19/07/16/06/04")
