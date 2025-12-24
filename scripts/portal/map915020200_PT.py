# 915020200
JOB_QUEST = 25121
GUARDIOSO_NPC = 2159462
GUARDIOSO_MOB = 9001047

sm.setPlayerAsSpeaker()
if chr.getJob() != 2411 or chr.getLevel() < 100:
    sm.chat("This location is only available for Phantoms looking to get stronger.")
else:
    if not sm.hasHadQuest(JOB_QUEST):
        sm.startQuest(JOB_QUEST)
    qrVal = sm.getQRValue(JOB_QUEST)
    if qrVal != "spawn":
        sm.sendSayOkay("I don't like the way that statue looks...")
        sm.removeNpc(GUARDIOSO_NPC) # Guardioso (Npc)
        sm.spawnMob(GUARDIOSO_MOB, 290, 180) # Guardioso (Mob)
        sm.setQRValue(JOB_QUEST, "spawn")
    elif not sm.hasMobsInField():
        sm.completeQuest(JOB_QUEST)
        sm.warp(915020201, 2)
    else:
        sm.chat("You must defeat the #bGuardioso#k before being able to enter.")
