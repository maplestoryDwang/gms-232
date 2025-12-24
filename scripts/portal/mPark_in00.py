# 951000000 - Monster Park

from net.swordie.ms.constants import GameConstants
from net.swordie.ms.enums import DailyEntry

minLv = 105
maxLv = 115

maps = [
    ["Auto Security Area (Lv.105-114)", 953020000]
]

sm.setSpeakerID(9071004)
if not sm.getParty() is None:
    sm.sendSayOkay("Please leave your party to enter Monster Park.")
    sm.dispose()

elif sm.getChr().getLevel() < minLv or sm.getChr().getLevel() > maxLv:
    sm.sendSayOkay("You need to be between Level "+ str(minLv) +" and "+ str(maxLv) +" to enter.")
    sm.dispose()

else:
    string = "#eToday is #b"+ sm.getDay() +"#k.\r\nToday's Clear Count "+ str(DailyEntry.MonsterPark.getEntriesPerReset() - sm.getRemainingDailyEntries(DailyEntry.MonsterPark)) +"/"+ str(DailyEntry.MonsterPark.getEntriesPerReset()) +"#k (per Account)\r\n\r\n#n#b"
    i = 0
    while i < len(maps):
        string += "#L"+ str(i) +"#"+ maps[i][0] +"#l\r\n"
        i += 1
    selection = sm.sendNext(string)

    if sm.getRemainingDailyEntries(DailyEntry.MonsterPark) <= 0:
        sm.sendSayOkay("I'm sorry, but you've used up all your clears for today.")
        sm.dispose()
    else:
        if sm.sendAskYesNo("#eToday is #b"+ sm.getDay() +"#k.\r\n\r\n" +
                           "Selected Dungeon: #b"+ maps[selection][0] +"#k\r\n" +
                           "Clearing the dungeon will use up #bone of your free clears#k \r\nfor today.\r\n\r\n" +
                           "Would you like to enter the dungeon?"):
            sm.warpInstanceIn(maps[selection][1])
            sm.createQuestWithQRValue(GameConstants.MONSTER_PARK_EXP_QUEST, "0")
            sm.setInstanceTime(GameConstants.MONSTER_PARK_TIME, 951000000)
