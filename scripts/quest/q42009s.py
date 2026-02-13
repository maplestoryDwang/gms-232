from net.swordie.ms.constants import QuestConstants

sm.setSpeakerID(2540000)  # Alicia's Soul
sm.sendNext("#b#h0##k。我得到报告说，希纳斯调查团在#r冒险岛世界的北部边缘#k发现了#b可疑的海底建筑#k。而且据说，在那个建筑中还发现了世界树阿丽莎很久之前的思念体。")
sm.completeQuestNoCheck(parentID)
sm.completeQuestNoCheck(42011)

sm.startQuest(QuestConstants.TOWER_OF_OZ_PILL_SLOT)
sm.setQRValue(QuestConstants.TOWER_OF_OZ_PILL_SLOT, "slot1=0")
sm.updateQRValue(QuestConstants.TOWER_OF_OZ_PILL_SLOT, False)