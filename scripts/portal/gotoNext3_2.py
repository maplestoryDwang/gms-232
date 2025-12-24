from net.swordie.ms.constants.questlineconstants import LionHeartQuestlineConstants

# Lionhear questline | First Tower.
sm.setSpeakerID(LionHeartQuestlineConstants.LUDEN_NPC_ID)
has_completed = sm.getQRValue(LionHeartQuestlineConstants.FINAL_SPELL_BREAKER_QUEST_ID) == LionHeartQuestlineConstants.FINAL_SPELL_BREAKER_QUEST_KEY


if sm.hasQuestCompleted(LionHeartQuestlineConstants.FINAL_SPELL_BREAKER_QUEST_ID):
    sm.warp(211060610, 1)


elif has_completed:
    sm.completeQuest(LionHeartQuestlineConstants.FINAL_SPELL_BREAKER_QUEST_ID)
    sm.sendNext("You did it! Come to me in the fourth tower")
    sm.warp(211060610, 1)


elif not sm.hasQuest(LionHeartQuestlineConstants.FINAL_SPELL_BREAKER_QUEST_ID):
    sm.sendNext("You are finally at the last gate. Among the monsters that lurk in the castle, #bPrison Guard Rhinos#k are the most violent and frightening.")
    sm.setPlayerAsSpeaker()
    sm.sendNext("Will the wards be broken once I take them down this time?")
    sm.setSpeakerID(LionHeartQuestlineConstants.LUDEN_NPC_ID)
    sm.sendNext("Yes, but do not walk in carelessly. I'd hate to see you get eaten.")
    sm.setPlayerAsSpeaker()
    sm.sendNext("Don't worry, i'll get the key from Jenn and break that ward in a jiffy.")
    sm.startQuest(LionHeartQuestlineConstants.FINAL_SPELL_BREAKER_QUEST_ID)
    sm.setQRValue(LionHeartQuestlineConstants.FINAL_SPELL_BREAKER_QUEST_ID, "0")


elif sm.hasQuest(LionHeartQuestlineConstants.FINAL_SPELL_BREAKER_QUEST_ID) and sm.getQRValue(LionHeartQuestlineConstants.FINAL_SPELL_BREAKER_QUEST_ID) == "0":
    sm.sendNext("You have to eliminate the #bPrison Guard Rhinos#k from the top of the tower.")


elif sm.hasQuest(LionHeartQuestlineConstants.FINAL_SPELL_BREAKER_QUEST_ID) and sm.getQRValue(LionHeartQuestlineConstants.FINAL_SPELL_BREAKER_QUEST_ID) == "1":
    sm.warp(211060610, 1)


elif sm.hasQuest(LionHeartQuestlineConstants.FINAL_SPELL_BREAKER_QUEST_ID) and sm.hasQuest(LionHeartQuestlineConstants.KEY_TO_THE_THIRD_TOWER_QUEST_ID):
    sm.setPlayerAsSpeaker()
    sm.sendNext("#p2161002#, I have to eliminate some #rBearwolves#k to obtain the key to the Rooftop.")
    sm.setSpeakerID(LionHeartQuestlineConstants.LUDEN_NPC_ID)
    sm.sendNext("Bearwolves lurk at #b#m211060700##k, the area beyond your current location. I guess there's no choice, I will attempt to weaken the barrier temporarily. In the meantime, you can bring the materials for the key.")
    sm.setQRValue(LionHeartQuestlineConstants.FINAL_SPELL_BREAKER_QUEST_ID, "1")
    sm.warp(211060610, 1)


else:
    sm.warp(211060610, 1)
