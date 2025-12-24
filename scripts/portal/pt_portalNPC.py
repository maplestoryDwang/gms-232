#Hard VL Exit Portal
from net.swordie.ms.constants import BossConstants
sm.setSpeakerID(9000212)
if sm.getFieldID() == BossConstants.VON_LEON_EASY_FIELDID or sm.getFieldID() == BossConstants.VON_LEON_NORMAL_FIELDID or sm.getFieldID() == BossConstants.VON_LEON_HARD_FIELDID:
    if sm.sendAskYesNo("Would you like to leave the fight?"):
        sm.warpInstanceOut(211070000, 0)