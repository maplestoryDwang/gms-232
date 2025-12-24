# Moonbridge: Eye of the Void
# 450009400
# Boss: Gloom
from net.swordie.ms.constants import BossConstants

chaos = sm.getFieldID() == BossConstants.GLOOM_HARD_FIELD

sm.spawnMob(BossConstants.GLOOM_HARD if chaos else BossConstants.GLOOM, -45, -157, BossConstants.GLOOM_HARD_HP if chaos else BossConstants.GLOOM_HP)
