from net.swordie.ms.constants import BossConstants

# Ranmaru Normal
spawned = field.hasProperty(BossConstants.RANMARU_SPAWN_KEY) and field.getProperty(BossConstants.RANMARU_SPAWN_KEY)
if not spawned:
    field.setProperty(BossConstants.RANMARU_SPAWN_KEY, True)
    sm.spawnMob(BossConstants.RANMARU_NORMAL_BODY, -375, 123, False, BossConstants.RANMARU_NORMAL_HP)
