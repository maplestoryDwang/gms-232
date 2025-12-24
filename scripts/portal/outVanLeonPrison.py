#Von leon Aerial Prison back to Boss fight
from net.swordie.ms.constants import BossConstants
KEY = 4032860
if sm.hasItem(KEY):
    sm.consumeItem(KEY, sm.getQuantityOfItem(KEY))
    if sm.getFieldID() == BossConstants.VON_LEON_PRISON_EASY_FIELDID:
        sm.warp(BossConstants.VON_LEON_EASY_FIELDID)
    if sm.getFieldID() == BossConstants.VON_LEON_PRISON_NORMAL_FIELDID:
        sm.warp(BossConstants.VON_LEON_NORMAL_FIELDID)
    if sm.getFieldID() == BossConstants.VON_LEON_PRISON_HARD_FIELDID:
        sm.warp(BossConstants.VON_LEON_HARD_FIELDID)


