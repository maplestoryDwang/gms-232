from net.swordie.ms.constants.questlineconstants import LionHeartQuestlineConstants

# Jenn's Brother(2161007) | Lion King Questline
sm.setSpeakerID(LionHeartQuestlineConstants.JENN_BROTHER_NPC_ID)
sm.sendNext("Sob... I... I want to go home.")
sm.sendNext("Eh? Wh. who are you...? Are you here to save me?")
if sm.hasMobsInField():
    sm.sendNext("We can't leave before all monsters are gone!")
else:
    if sm.canHold(LionHeartQuestlineConstants.JENN_BROTHER_ITEM_ID):
        sm.giveItem(LionHeartQuestlineConstants.JENN_BROTHER_ITEM_ID)
        sm.warpInstanceOut(LionHeartQuestlineConstants.TOWER_1_FIELD_ID)
        sm.createQuestWithQRValue(LionHeartQuestlineConstants.FIRST_SPELL_BREAKER_QUEST_ID, "1")
    else:
        sm.sendNext("Please make some space in your etc inventory.")
