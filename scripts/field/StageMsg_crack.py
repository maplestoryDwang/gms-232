# Hidden street | Abandoned Tower <Stage 2> / Abandoned Tower <Stage 3>

import random

from net.swordie.ms.enums import WeatherEffNoticeType

stage2Array = [0,0,0,0,0]
STAGE_2_CHECK = "Stage2Check"
STAGE_2_CLEARED = "Stage2Cleared"
STAGE_3_ORDER = "Stage3Order"
stage3OrderArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
STAGE_4_CLEARED = "Stage4Cleared"

if sm.getFieldID() == 922010100:
    sm.showWeatherNotice("Defeat all the monsters and collect their passes!", WeatherEffNoticeType.LudibriumPQ, 5000)

#Stage 2
if sm.getFieldID() == 922010400:
    if field.hasProperty(STAGE_2_CHECK):
        #Check if all stages are cleared
        if field.getProperty(STAGE_2_CHECK) == [1,1,1,1,1]:
            #Do this so that the effect won't get spammed
            if not field.hasProperty(STAGE_2_CLEARED):
                sm.invokeForParty("showFieldEffect", "quest/party/clear", 10000)
                sm.invokeForParty("showObjectFieldEffect","gate")
                field.setProperty(STAGE_2_CLEARED, True)
    else:
        sm.showWeatherNotice("Defeat all the Dark Eyes and Shadow Eyes hiding in the darkness!", WeatherEffNoticeType.LudibriumPQ, 5000)
        field.setProperty(STAGE_2_CHECK, stage2Array)

#Stage 3
elif sm.getFieldID() == 922010600:
    #Create puzzle order
    field.setProperty(STAGE_3_ORDER, stage3OrderArray)
    i = 0
    while i < len(stage3OrderArray):
        x = random.randint(1, 3)
        stage3OrderArray[i] = x
        i+=1
    field.setProperty(STAGE_3_ORDER, stage3OrderArray)
    sm.showWeatherNotice("Figure out the hidden code for the boxes and get to the top.", WeatherEffNoticeType.LudibriumPQ, 5000)

#Stage 5
elif sm.getFieldID() == 922010800:
    sm.showWeatherNotice("Get on the boxes that correspond to the answer to the question!", WeatherEffNoticeType.LudibriumPQ, 5000)

#Stage 6:
elif sm.getFieldID() == 922010900:
    sm.showWeatherNotice("Please kill the Alishar to continue.", WeatherEffNoticeType.LudibriumPQ, 5000)
    sm.spawnMob(9300012, 979, 184, False)
    while sm.hasMobsInField():
        sm.waitForMobDeath()
    sm.invokeForParty("showFieldEffect", "quest/party/clear", 10000)

