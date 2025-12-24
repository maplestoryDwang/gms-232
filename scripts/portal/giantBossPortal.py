# Gollux portals
from net.swordie.ms.constants import BossConstants

fields = {
    # Main map id : main portal id : [to field id, to field portal]
    863010100 : {
        3 : [863010300, 2],
        6 : [863010300, 2],
        7 : [863010400, 2],
        8 : [863010200, 1],
        9 : [863010220, 1],
    },
    863010200 : {
        0 : [863010100, 2],
        1 : [863010100, 8],
        2 : [863010210, 1],
    },
    863010210 : {
        1 : [863010200, 2],
        2 : [863010240, 2],
    },
    863010220 : {
        1 : [863010100, 9],
        2 : [863010230, 1],
    },
    863010230 : {
        1 : [863010220, 2],
        2 : [863010240, 1],
    },
    863010240 : {
        1 : [863010230, 2],
        2 : [863010210, 2],
        3 : [863010500, 2]
    },
    863010300 :{
        1 : [863010310, 1],
        2 : [863010100, 6],
    },
    863010310 : {
        1 : [863010300, 1],
        2 : [863010320, 2],
    },
    863010320 : {
        1 : [863010500, 1],
        2 : [863010310, 2],
        3 : [863010330, 1],
    },
    863010330 : {
        1 : [863010320, 3],
        3 : [863010500, 4]
    },
    863010400 : {
        1 : [863010410, 1],
        2 : [863010100, 7],
    },
    863010410 : {
        1 : [863010400, 1],
        2 : [863010420, 1],
    },
    863010420 : {
        1 : [863010410, 2],
        2 : [863010500, 5],
        3 : [863010430, 1],
    },
    863010430 : {
        1 : [863010420, 3],
        3 : [863010500, 6]
    },
    863010500 : {
        1 : [863010320, 1],
        2 : [863010240, 3],
        3 : [863010600, 2],
        4 : [863010330, 3],
        5 : [863010420, 2],
        6 : [863010430, 3],
    },
    863010600 : {
        2 : [863010700, 3],
    },
}

fieldID = sm.getFieldID()
if fieldID is None or fieldID not in fields:
    sm.chat("This portal (giantBossPortal.py) is not yet coded for this map (" + str(fieldID) + ")")
else:
    innerDict = fields[fieldID]
    if parentID not in innerDict:
        sm.chat("This portal (giantBossPortal, " + str(parentID) + ") is not yet coded for this map (" + str(fieldID) + ")")

    elif not fieldID == 863010100 and not fieldID == 863010500 and not field.getProperty(BossConstants.GOLLUX_FINISHED_KEY):
        sm.chat("Defeat all monsters first.")
    else:
        if fieldID == 863010600:
            if field.hasProperty(BossConstants.GOLLUX_FINISHED_KEY) and field.getProperty(BossConstants.GOLLUX_FINISHED_KEY):
                sm.warp(innerDict[parentID][0])
            else:
                sm.chat("Kill the boss first.")
        else:
            sm.warp(innerDict[parentID][0], innerDict[parentID][1])
