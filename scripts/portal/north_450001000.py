# Nameless Town
# 450001000
# Warps to Subway Station Entrance if [Reverse City] The Most Normal Person is active or cleared.

if sm.hasQuest(37602) or sm.hasQuestCompleted(37602):
  sm.warp(450001002, 1)
