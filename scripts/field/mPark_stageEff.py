# Monster Park Maps
from net.swordie.ms.constants import WzConstants

stage = ((sm.getFieldID() % 1000) / 100) + 1
if stage == 6:
    sm.showEffect(WzConstants.EFFECT_MONSTER_PARK_FINAL_STAGE)
else:
    sm.showEffect("" + WzConstants.EFFECT_MONSTER_PARK_STAGE_NUMBER + "" + str(stage))
    sm.showEffect(WzConstants.EFFECT_MONSTER_PARK_STAGE)
sm.chatScript("All monsters in the field must be eliminated before you can move to the next stage.")