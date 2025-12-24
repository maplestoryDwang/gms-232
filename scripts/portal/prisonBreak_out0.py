# 921160700 - Escape! - PQ

BOSS_FIELD = 921160700

if field.getId() == BOSS_FIELD:
    if sm.hasMobsInField():
        sm.chat("The portal is not opened.")
    else:
        sm.warpInstanceOut(910002000) # Party Quest Map
        sm.giveExp(sm.getPQExp()) # Gives player PQ exp if they left via the boss room
elif sm.sendAskYesNo("Are you sure you want to leave? You won't be able to return."):
    sm.warpInstanceOut(910002000) # Party Quest Map