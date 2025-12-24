# id 34305 ([Lachelein] Lucid Dreams), field 450003100
sm.setSpeakerType(3)
sm.setParam(4)
sm.setInnerOverrideSpeakerTemplateID(3003201) # Protective Mask
sm.sendNext("I heard you need to go further down the river. If we succeed in freeing ourselves from this city of dreams, your wish will be a possibility. ")
sm.setSpeakerType(4)
sm.setSpeakerID(3003201) # Protective Mask
sm.setParam(0)
res = sm.sendAskAccept("Will you aid us?")
sm.setSpeakerType(3)
sm.setParam(4)
sm.sendNext("Thank you. Gray Mask can tell you more.")
sm.startQuest(parentID)
sm.completeQuestNoCheck(parentID)
sm.startQuest(34306)
sm.completeQuestNoCheck(34306)
sm.startQuest(34307)
sm.completeQuestNoCheck(34307)
