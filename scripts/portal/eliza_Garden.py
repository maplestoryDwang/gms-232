# Stairway to the Sky II
# 200010300
# Warps to Eliza's Garden if Eliza's Garden (the quest) is active or completed.

calmEliza = 3112

if sm.hasQuest(calmEliza) or sm.hasQuestCompleted(calmEliza):
    sm.warp(920020000, 2)
else:
    sm.chat("Eliza's rage still permeates the garden. Calm him down first.")