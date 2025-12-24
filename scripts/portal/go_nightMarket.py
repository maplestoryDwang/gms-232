# Lachelein Main Street
# 450003000
# Warps to Chicken Festival 1 if [Lachelein] The Old Music Box is active or cleared.

if sm.hasQuest(34310) or sm.hasQuestCompleted(34310):
    sm.warp(450003300, 2)
else:
    sm.chat("The thick fog prevents you from moving towards the Night Market.")