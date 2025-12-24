# Yu Garden (701100000)

zhenLong = 9310532
zhangWei = 9310535

inspection = 62111
lifesaver = 62132

# Hide Zhang Wei until he's actually "rescued"
if not sm.hasQuestCompleted(lifesaver):
    sm.hideNpcByTemplateId(9310535, True)

# Auto-accept Stop! Inspection! upon entering Yu Garden if it's not already accepted/complete
if not sm.hasQuest(inspection) and not sm.hasQuestCompleted(inspection):
    sm.startQuest(inspection)