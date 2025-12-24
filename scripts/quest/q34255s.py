# id 34255 ([Morass] A Frightening Rumor 1), field 993017200
sm.createQuestWithQRValue(34271, "20=h0;21=h0;30=h0;31=h0;23=h0;32=h0;33=h0;52=h0;34=h0;35=h0;18=h1;36=h0;29=h1")
sm.setSpeakerType(3)
sm.setParam(57)
sm.setColor(1)
sm.sendNext("Is there a problem here?")
sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(3003418) # Gangster
sm.sendSay("#face0#Nothing that concerns you. Get lost!")
sm.setInnerOverrideSpeakerTemplateID(3003413) # Man
sm.sendSay("#face0#Oh, Shey! Perfect timing! Help me out here! \r\n\r\n#fs20#Back off, you greedy thugs! This guy's a priest of the great temple!")
sm.setParam(57)
sm.sendSay("#b(Priest? Hm... so Shey's a priest.)#k")
sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(3003418) # Gangster
sm.sendSay("#face0#Oh, uh... You are? Well... We'll just take this and get out of your way, then.")
sm.createQuestWithQRValue(34271, "20=h0;21=h0;30=h0;31=h0;23=h0;32=h0;33=h0;52=h0;34=h0;35=h0;18=h0;36=h0;29=h1")
sm.setInnerOverrideSpeakerTemplateID(3003413) # Man
sm.sendSay("#face0#Hey! Give that back! You can't just go around taking anything you want!")
sm.setParam(36)
res = sm.sendAskYesNo("That's my livelihood you're running off with! \r\nShey! Would you please, please get my #bRipe Apples#k back from them? Business is bad enough as it is.")
sm.startQuest(parentID)
sm.sendNext("#face0#Thanks! They'll be in #bBully Blvd.#k")
