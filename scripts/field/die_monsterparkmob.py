# All monster park mobs
from net.swordie.ms.constants import GameConstants
from net.swordie.ms.constants import WzConstants
from net.swordie.ms.enums import WeatherEffNoticeType

#Exp based on mobTemplateId
exp = sm.getMPExpByMobId(mob.getTemplateId())

#Stores Exp from killing mobs
sm.setQRValue(GameConstants.MONSTER_PARK_EXP_QUEST, str(int(sm.getQRValue(GameConstants.MONSTER_PARK_EXP_QUEST)) + exp))

#displays the EXP message
sm.showWeatherNoticeToField("EXP reward "+ sm.formatNumber(sm.getQRValue(GameConstants.MONSTER_PARK_EXP_QUEST)) +" earned!", WeatherEffNoticeType.MonsterPark_ExpMsg)

if not sm.hasMobsInField():
    sm.showEffectToField(WzConstants.EFFECT_CLEAR)