from net.swordie.ms.client.partyquests.towerofoz import OzTowerModule
from net.swordie.ms.constants import OzConstants
from net.swordie.ms.enums import WeatherEffNoticeType

sm.showWeatherNotice("Eliminate all the Blue slimes", WeatherEffNoticeType.Oz_Alicia, 5000)
instance = chr.getInstance()
if instance is not None:
    if not instance.hasProperty("F33_Inited"):
        instance.addProperty("F33_Inited", True)
        OzTowerModule.randomisePointers(chr)

if sm.canHold(OzConstants.CLOCKWISE_LABYRINTH_KEY, OzConstants.KEYS_GIVEN_PER_TELEPORT) \
        and sm.canHold(OzConstants.COUNTERCLOCKWISE_LABYRINTH_KEY, OzConstants.KEYS_GIVEN_PER_TELEPORT):
    sm.giveItem(OzConstants.CLOCKWISE_LABYRINTH_KEY, OzConstants.KEYS_GIVEN_PER_TELEPORT)
    sm.giveItem(OzConstants.COUNTERCLOCKWISE_LABYRINTH_KEY, OzConstants.KEYS_GIVEN_PER_TELEPORT)
