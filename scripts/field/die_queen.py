isChaos = 8920000 <= mob.getTemplateId() <= 8920003
chestMob = 8920006 if isChaos else 8920106

for chr in field.getChars():
    qm = chr.getQuestManager()
    if chr.hasQuestInProgress(30011):
        qm.completeQuest(30011) # [Root Abyss] Defeat the Third Seal Guardian
sm.spawnMob(chestMob, 40, 135, False) #Spawn C.Queen's Treasure Chest