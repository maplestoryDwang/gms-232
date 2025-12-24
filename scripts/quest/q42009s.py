from net.swordie.ms.constants import QuestConstants

sm.setSpeakerID(2540000)  # Alicia's Soul
sm.sendNext("Hello #h0#!\r\nI need your help. Come by the Tower of Oz as soon as you can.")
sm.completeQuestNoCheck(parentID)
sm.completeQuestNoCheck(42011)

sm.startQuest(QuestConstants.TOWER_OF_OZ_PILL_SLOT)
sm.setQRValue(QuestConstants.TOWER_OF_OZ_PILL_SLOT, "slot1=0")
sm.updateQRValue(QuestConstants.TOWER_OF_OZ_PILL_SLOT, False)