# id 22730 (Codebreaker Jay 2), field 331001000
sm.setSpeakerType(3)
sm.setParam(37)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(1531001) # Jay
sm.sendNext("I analyzed those things you fought yesterday, but I can't figure them out. I want to say they're ghosts, but I mean, that's ridiculous. ")
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendSay("Whatever they are, I can take them. Don't worry about me. ")
sm.setInnerOverrideSpeakerTemplateID(1531001) # Jay
sm.sendSay("That confidence of yours will be your downfall. Also, get that cat away from my gear. It's been eyeing my mouse for the last hour, the mangy thing.")
sm.sendSay("Still, this might be a good time for confidence. I got another one of those codes. ")
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendSay("Good. Point me at them and let me loose.")
sm.setInnerOverrideSpeakerTemplateID(1531001) # Jay
sm.sendSay("K, hold it. I want to ask you something first.")
sm.sendSay("#face0#I know you're hiding something. I lost the uplink with you for just a moment, but your Psy-Limiter showed a spike.")
res = sm.sendNext("#face0#What happened at the school?\r\n#b#L1#(Tell the truth about losing consciousness.)#l\r\n#L2#(Lie.)#l")
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendNext("I lost consciousness for a second. And in that time, my control over my powers slipped. I think I was just exhausted.")
sm.setInnerOverrideSpeakerTemplateID(1531001) # Jay
sm.sendSay("#face0#I don't like the sound of that. Not at all. You should rest up today.")
sm.lockInGameUI(True, False)
sm.changeBGM("Bgm00.img/Silence", 0, 0)
sm.playSound("Sound/SoundEff.img/radionoise", 100)
sm.playSound("Sound/Voice3.img/Kinesis/news_01", 100)
sm.progressMessageFont(3, 20, 20, 0, "We have breaking reports of a situation at Seoul's Hannam subway station.")
sm.sendDelay(3500)
sm.progressMessageFont(3, 20, 20, 0, "An unknown assailant has been attacking people at random in the area. ")
sm.sendDelay(3500)
sm.progressMessageFont(3, 20, 20, 0, "Citizens are advised to avoid the station.")
sm.sendDelay(2000)
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendNext("#face0##fs30#!!")
sm.changeBGM("Bgm40.img/SecretMission", 0, 0)
sm.playSound("Sound/Voice3.img/Kinesis/news_02", 100)
sm.progressMessageFont(3, 20, 20, 0, "Again, the authorities are requesting that all citizens stay away")
sm.sendDelay(1500)
sm.progressMessageFont(3, 20, 20, 0, "from the Hannam station until this matter is resolved. ")
sm.sendDelay(1500)
sm.playSound("Sound/SoundEff.img/radionoise", 100)
sm.progressMessageFont(3, 20, 20, 0, "Do not leave your homes.")
sm.sendDelay(3000)
sm.lockInGameUI(False, True)
sm.setInnerOverrideSpeakerTemplateID(1531001) # Jay
res = sm.sendNext("#face1#...Kinesis, this is serious. I don't want you out there.\r\n#b#L1#I have to save those people!#l\r\n#L2#I want to know more about my abilities.#l\r\n#L3#I just want to enjoy this power while I have it.#l")
sm.createQuestWithQRValue(parentID, "done=1")
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendNext("Didn't you hear? The monsters are attacking innocents now. I have to do something.")
sm.setInnerOverrideSpeakerTemplateID(1531001) # Jay
sm.sendSay("#face0#...Why do I even bother? Get going. I'll be with you on comms.")
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendSay("#b(Hurry to the subway.)#k")
sm.createQuestWithQRValue(22700, "V01=1;V02=1;q21end=0;coNight=1;kinetuto=1;kinetuto2=1;E1=1;blackCat=0;E2=1;E3=1")
sm.createQuestWithQRValue(22700, "V01=1;V02=1;q21end=0;coNight=0;kinetuto=1;kinetuto2=1;E1=1;blackCat=0;E2=1;E3=1")
sm.startQuest(parentID)
