# Town of Ariant
# 260000200
# Warps to An Old, Empty House if Sejan, Ardin, and Eleska's respective quests have been fully cleared.

sejan = 3930
ardin = 3933
eleska = 3936

if sm.hasQuestCompleted(sejan) and sm.hasQuestCompleted(ardin) and sm.hasQuestCompleted(eleska):
    sm.warp(260000201, 1)
else:
    sm.chat("Only members of the Sand Bandits may enter.")