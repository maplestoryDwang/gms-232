from net.swordie.ms.constants import BossConstants

# Ranmaru Hard
spawned = field.hasProperty(BossConstants.RANMARU_SPAWN_KEY) and field.getProperty(BossConstants.RANMARU_SPAWN_KEY)
if not spawned:
    field.setProperty(BossConstants.RANMARU_SPAWN_KEY, True)
    sm.spawnMob(BossConstants.RANMARU_HARD_BODY_1, -375, 123, False, BossConstants.RANMARU_HARD_HP)
