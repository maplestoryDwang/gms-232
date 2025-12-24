from net.swordie.ms.constants.questlineconstants import LionHeartQuestlineConstants

# Lionheart Castle | portal to Dangerous roof of the third tower
if sm.hasItem(LionHeartQuestlineConstants.KEY_TO_THE_THIRD_TOWER):
    sm.consumeItem(LionHeartQuestlineConstants.KEY_TO_THE_THIRD_TOWER)
    sm.warpInstanceIn(LionHeartQuestlineConstants.TOWER_3_INSTANCE_FIELDID)
    instance = chr.getInstance()
    instance.setForcedReturn(LionHeartQuestlineConstants.TOWER_3_FIELD_ID)
    sm.setInstanceTime(LionHeartQuestlineConstants.TOWER_3_INSTANCE_TIME)
else:
    sm.chat("You require a key to enter.")