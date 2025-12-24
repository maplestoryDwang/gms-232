from net.swordie.ms.client.partyquests.towerofoz import OzTowerModule
from net.swordie.ms.constants import OzConstants
from net.swordie.ms.enums import WeatherEffNoticeType

sm.showWeatherNotice("Eliminate monsters to get cards with higher numbers and trick the barrier.", WeatherEffNoticeType.Oz_Alicia, 5000)
instance = chr.getInstance()
if instance is not None:
    if not instance.hasProperty("F2_Inited"):
        instance.addProperty("F2_Inited", True)
        instance.addProperty(OzConstants.F2_CURRENT_CARD_COLOUR, "")
        instance.addProperty(OzConstants.F2_CURRENT_CARD_NUMBER, 0)
        instance.addProperty(OzConstants.F2_SEALS_CLEARED, 0)
        OzTowerModule.randomiseSeals(chr)