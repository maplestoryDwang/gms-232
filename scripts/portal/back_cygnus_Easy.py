#Easy Cygnus Ban map exit | Scrubby Garden
from net.swordie.ms.constants import BossConstants
if not sm.hasMobsInField():
    sm.warp(BossConstants.CYGNUS_EASY_MAP)
else:
    sm.chat("You need to kill all mobs in the field first.")