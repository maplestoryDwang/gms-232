# id 22703 (More Space 1), field 331001000
sm.setSpeakerType(3)
sm.setParam(4)
sm.setInnerOverrideSpeakerTemplateID(1531001) # Jay
sm.sendNext("Kinesis, I've got a present for you. Thought it would be nice to celebrate your first real upgrade.")
res = sm.sendAskYesNo("Check it out, it's a bag! This will help you carry more stuff without having to resort to a fanny-pack or something.")
sm.startQuest(parentID)
sm.completeQuestNoCheck(parentID)
sm.sendSayOkay("Keep it up, K. Not that you need me to tell you that.")
