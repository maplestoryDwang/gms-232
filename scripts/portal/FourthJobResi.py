# 310060221
if sm.hasQuest(23043) or sm.hasQuest(23044) or sm.hasQuest(23045) or sm.hasQuest(23166) or sm.hasQuest(23049) or sm.hasQuest(23050) or sm.hasQuest(23051) or sm.hasQuest(23168):
    if sm.hasQuest(23043) or sm.hasQuest(23049): # BaM
        sm.completeQuest(23043)
        sm.warp(931000300, 0)
    elif sm.hasQuest(23044) or sm.hasQuest(23050): # WH
        sm.completeQuest(23044)
        sm.warp(931000301, 0)
    elif sm.hasQuest(23045) or sm.hasQuest(23051): # Mech
        sm.completeQuest(23045)
        sm.warp(931000302, 0)
    elif sm.hasQuest(23166) or sm.hasQuest(23168): # Blaster
        sm.completeQuest(23166)
        sm.warp(931000303, 0)
else:
    sm.chat("This seems to be a forbidden area. Better stay away.")
