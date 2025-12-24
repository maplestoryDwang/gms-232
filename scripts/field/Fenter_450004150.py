# Boss Lucid Field Script
from net.swordie.ms.constants import BossConstants

TREE_STEM = 8880166

sm.spawnMob(BossConstants.LUCID_TEMPLATE_ID_1, 1015, 48, False, BossConstants.LUCID_HP_1)
sm.spawnMob(TREE_STEM, 1015, 48, False, 1)  # Tree Stem
