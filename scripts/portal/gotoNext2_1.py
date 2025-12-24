from net.swordie.ms.constants.questlineconstants import LionHeartQuestlineConstants

# Lionhear questline | First Tower.
sm.setSpeakerID(LionHeartQuestlineConstants.LUDEN_NPC_ID)
has_completed = sm.getQRValue(LionHeartQuestlineConstants.SECOND_SPELL_BREAKER_QUEST_ID) == LionHeartQuestlineConstants.SECOND_SPELL_BREAKER_QUEST_KEY


if sm.hasQuestCompleted(LionHeartQuestlineConstants.SECOND_SPELL_BREAKER_QUEST_ID):
    sm.warp(211060500, 1)


elif has_completed:
    sm.completeQuest(LionHeartQuestlineConstants.SECOND_SPELL_BREAKER_QUEST_ID)
    sm.sendNext("I didn't think you'd make it this far! I'm starting to feel hope again!")
    sm.warp(211060500, 1)


elif not sm.hasQuest(LionHeartQuestlineConstants.SECOND_SPELL_BREAKER_QUEST_ID):
    sm.sendNext("You've made it to the Second Gate, so I'll get to the point. The ward on the Second Gate will break once you eliminate all of the #rPrison Guard Boars#k on the Roof of the Second Tower")
    sm.setPlayerAsSpeaker()
    sm.sendNext("Prison Guard Boar, huh? Can I eat him afterwards? I carry bacon seasoning with me at all times.")
    sm.setSpeakerID(LionHeartQuestlineConstants.LUDEN_NPC_ID)
    sm.sendNext("Do as you like, but they truly are fearsome swines. Return to the locksmith and obtain the key to the Roof of the Second Tower.")
    sm.startQuest(LionHeartQuestlineConstants.SECOND_SPELL_BREAKER_QUEST_ID)
    sm.setQRValue(LionHeartQuestlineConstants.SECOND_SPELL_BREAKER_QUEST_ID, "0")


elif sm.hasQuest(LionHeartQuestlineConstants.SECOND_SPELL_BREAKER_QUEST_ID) and sm.getQRValue(LionHeartQuestlineConstants.SECOND_SPELL_BREAKER_QUEST_ID) == "0":
    sm.sendNext("The ward on the Second Gate will break once you eliminate all of the #rPrison Guard Boars#k on the Roof of the Second Tower")


else:
    sm.warp(211060500, 1)
