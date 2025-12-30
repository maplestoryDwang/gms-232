# Limina : Final Horizon
# 450012600
# Boss: Darknell
from net.swordie.ms.constants import BossConstants

chaos = sm.getFieldID() == BossConstants.DARKNELL_HARD_FIELD

sm.spawnMob(BossConstants.DARKNELL_HARD if chaos else BossConstants.DARKNELL_NORMAL, -45, -157, BossConstants.DARKNELL_HARD_HP if chaos else BossConstants.DARKNELL_HP)
sm.spawnMob(BossConstants.DARKNELL_BEAM)