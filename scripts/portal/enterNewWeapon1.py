# 931000310
job = chr.getJob()
if job == 3211: # BaM
    sm.warpInstanceIn(931000320, 0)
    if not sm.hasMobsInField:
        sm.spawnMob(9001035, -344, 16, False)
