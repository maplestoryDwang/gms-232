from net.swordie.ms.constants import OzConstants
from net.swordie.ms.enums import WeatherEffNoticeType

sm.showWeatherNotice("Place {} bits of Orange Slime Goo on the Burning Altar to summon more monsters. You'll have to take out {} in all.".format(OzConstants.ORANGE_SLIME_LIQUID_REQ, OzConstants.F26_KILL_COUNT), WeatherEffNoticeType.Oz_Alicia, 5000)
