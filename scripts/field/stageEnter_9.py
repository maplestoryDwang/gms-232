import random

from net.swordie.ms.constants import OzConstants
from net.swordie.ms.enums import WeatherEffNoticeType

instance = chr.getInstance()
if instance is not None:
    if not instance.hasProperty("F9_Inited"):
        instance.addProperty("F9_Inited", True)

        puzzle_order = [0, 0, 0, 0, 0, 0, 0, 0]
        i = 0
        while i < len(puzzle_order):
            x = random.randint(1, 3)
            puzzle_order[i] = x
            i += 1

        instance.addProperty(OzConstants.F9_ORDER, puzzle_order)
        instance.addProperty(OzConstants.F9_CORRECT_PORTALS, 0)
        sm.showWeatherNotice("Find the portal to the next floor.", WeatherEffNoticeType.Oz_Alicia, 5000)
