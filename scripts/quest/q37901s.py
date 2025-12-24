# id 37901 ([Sellas] How to Fix a Radio), field 993017200
sm.playSound("Sound/SoundEff.img/radionoise", 100)
sm.setSpeakerType(3)
sm.setParam(36)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(1540451) # Neinheart
sm.sendNext("#face2#Ah-ha, can you hear me, #h0#?")
sm.setParam(56)
sm.sendSay("Yeah, what's happening?")
sm.setParam(36)
sm.sendSay("#face2#This is base camp headquarters in #bEsfera#k.\r\nWe're running an urgent, special operation before we advance to the #rblack sun#k... *static* ...")
sm.setParam(56)
sm.sendSay("Hm?")
sm.playSound("Sound/SoundEff.img/radionoise", 100)
sm.setParam(36)
sm.sendSay("#face2#Oh, our radio's having some trouble... *static*... Can I get someone from *static*... signal corps over here...??")
sm.setInnerOverrideSpeakerTemplateID(3003500) # Ollie
sm.sendSay("#face0#May I... *static* a look...?")
sm.setInnerOverrideSpeakerTemplateID(1540451) # Neinheart
sm.sendSay("#face2#Ollie? I didn't know you... *static*... -neering experience.")
sm.setInnerOverrideSpeakerTemplateID(3003500) # Ollie
sm.sendSay("#face0#Okay, stand back. \r\nIf... *static*... doesn't work... you do this this! #r*Whack*#k And this! #r*whack*#k")
sm.setInnerOverrideSpeakerTemplateID(1540451) # Neinheart
sm.sendSay("#face2#Wait, what are you doing?! \r\nYou're going to... *static* break... *static*")
sm.playSound("Sound/SoundEff.img/radionoise", 100)
sm.sendSay("#face2##r*Long static* ... *More static*")
sm.setParam(56)
sm.sendSay("...")
sm.setSpeakerType(4)
sm.setSpeakerID(3004801) # Neinheart
res = sm.sendAskYesNo("(Maybe I should just go talk to them.)\r\n\r\n#b(* If you accept, you will automatically move to the relevant field.)")
sm.startQuest(parentID)
sm.createQuestWithQRValue(37900, "00=h1")
sm.createQuestWithQRValue(37900, "00=h1;41=h0")
sm.warp(993185000)
