# id 450002023 (Chu Chu Island : Quiet Village Path), field 450002023
sm.setMapTaggedObjectVisible("obj_02", False, 0, 0)
sm.setMapTaggedObjectVisible("obj_03", False, 0, 0)
sm.setMapTaggedObjectVisible("obj_04", False, 0, 0)
sm.setMapTaggedObjectVisible("obj_01", False, 0, 0)

if sm.hasQuestCompleted(34208) and not sm.hasQuestCompleted(34217):
    sm.setMapTaggedObjectVisible("obj_01", True, 0, 0)
if sm.hasQuestCompleted(34210) and not sm.hasQuestCompleted(34217):
    sm.setMapTaggedObjectVisible("obj_02", True, 0, 0)
if sm.hasQuestCompleted(34212) and not sm.hasQuestCompleted(34217):
    sm.setMapTaggedObjectVisible("obj_03", True, 0, 0)
if sm.hasQuestCompleted(34214) and not sm.hasQuestCompleted(34217):
    sm.setMapTaggedObjectVisible("obj_04", True, 0, 0)