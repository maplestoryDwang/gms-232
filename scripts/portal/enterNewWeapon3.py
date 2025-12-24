# 931000312
job = chr.getJob()
if job == 3511: # Mech
    sm.warpInstanceIn(931000322, 0)
    if not sm.hasMobsInField:
        sm.spawnMob(9001035, -344, 16, False)
