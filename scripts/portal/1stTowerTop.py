from net.swordie.ms.constants.questlineconstants import LionHeartQuestlineConstants

# Lionheart Castle | portal to Dangerous roof of the first tower

# For 'Rescue Jenn's Brother
if sm.hasQuest(LionHeartQuestlineConstants.RESCUE_JENN_BROTHER_QUEST_ID) and sm.hasItem(LionHeartQuestlineConstants.TEMPORARY_KEY_TO_THE_FIRST_TOWER):
    sm.consumeItem(LionHeartQuestlineConstants.TEMPORARY_KEY_TO_THE_FIRST_TOWER)
    sm.warpInstanceIn(LionHeartQuestlineConstants.TOWER_1_INSTANCE_FIELDID, 0, False)
    sm.setInstanceTime(LionHeartQuestlineConstants.TOWER_1_INSTANCE_TIME)

# For 'First Spell Breaker'
elif sm.hasItem(LionHeartQuestlineConstants.KEY_TO_THE_FIRST_TOWER):
    sm.consumeItem(LionHeartQuestlineConstants.KEY_TO_THE_FIRST_TOWER)
    sm.warpInstanceIn(LionHeartQuestlineConstants.TOWER_1_INSTANCE_FIELDID_2)
    instance = chr.getInstance()
    instance.setForcedReturn(LionHeartQuestlineConstants.TOWER_1_FIELD_ID)
    sm.setInstanceTime(LionHeartQuestlineConstants.TOWER_1_INSTANCE_TIME_2)

else:
    sm.chat("You require a key to enter.")
