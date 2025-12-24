# id 34264 ([Morass] The Prince and the Princess 3), field 450006300

sm.setSpeakerType(3)
sm.setColor(1)
sm.setParam(56)
sm.sendSay("Trueffet didn't disappear like we expected. The morass is still intact.")
sm.setParam(36)
sm.setInnerOverrideSpeakerTemplateID(3003406) # Jean
sm.sendSay("#face0#Yes, you've done well, but it seems I still have more to do. This won't be easy.")
sm.setParam(56)
sm.sendSay("Why?")
sm.setParam(36)
sm.setInnerOverrideSpeakerTemplateID(3003406) # Jean
sm.sendSay("#face0#I can't easily follow the #rBlack Mage#k using this body.")
sm.setParam(56)
sm.sendSay("#rWhat?!")
sm.setParam(36)
sm.setInnerOverrideSpeakerTemplateID(3003406) # Jean
sm.sendSay("#face0#I didn't expect to take on a human form.")
sm.setParam(56)
sm.sendSay("But...")
sm.setParam(36)
sm.setInnerOverrideSpeakerTemplateID(3003406) # Jean
sm.sendSay("#face0#I'll return to the morass and find a solution. I took on this new appearance there, so there must be a way to revert to my previous form.")
sm.sendSay("#face0#Once I've done that, I can continue my efforts to stop the Black Mage. Thank you for all that you've done. If I ever require your assistance again, I will find you.")
sm.setParam(56)
sm.sendSay("So that's it for now. At least we discovered what happened with Tana, Arkarium, and King Hekaton all those years ago. But what happened to Shey?")
sm.sendSay("Ah, the journal is glowing again. maybe the last entry has appeared.")
sm.setParam(36)
sm.setInnerOverrideSpeakerTemplateID(3003406) # Jean
sm.sendSay("#face0#Find me if you lose that journal. I can make another inside the morass.")
sm.startQuest(parentID)
sm.completeQuest(parentID)
sm.createQuestWithQRValue(34271, "32=h0;32=h1")


