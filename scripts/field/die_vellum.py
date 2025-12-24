# 9400942
for chr in field.getChars():
    qm = chr.getQuestManager()
    if chr.hasQuestInProgress(30012):
        qm.completeQuest(30012) # [Root Abyss] Defeat the Final Guardian