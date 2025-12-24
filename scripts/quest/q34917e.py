# id 34917 (Medical Supplies), field 402000600
sm.createQuestWithQRValue(parentID, "exp=1")
sm.completeQuestNoCheck(parentID)
sm.setSpeakerType(3)
sm.setParam(36)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(3001508) # Zippy
sm.sendNext("#face0#Thank you for getting these so quickly! This will really help.")
sm.sendSay("#face0#Oh, and if you have any trouble getting back to the refuge, remember that you can get back through the Maple Guide.")
sm.sendSay("#face0#We trust you now. Please take good care of the refuge!")
