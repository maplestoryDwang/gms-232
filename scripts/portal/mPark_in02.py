# Monster Park

from net.swordie.ms.constants import GameConstants
from net.swordie.ms.enums import DailyEntry

minLv = 160

maps = [
["Ruined City (Lv.160-169)", 954000000],
["Dead Tree Forest (Lv.170-179)", 954010000],
["Watchman's Tower (Lv.175-184)", 954020000],
["Dragon Nest (Lv.180-189)", 954030000],
["Temple of Oblivion (Lv.185-194)", 954040000],
["Knight Stronghold (Lv.190-199)", 954050000],
["Spirit Valley (Lv.200-209)", 954060000],
["Vanishing Journey (Lv. 200 - 209)", 954070000],
["Chu Chu Island (Lv. 210 - 219)", 954080000],
["Lachelein the Dreaming City (Lv. 220 - 229)",954090000],
["The Mysterious Forest of Arcana (Lv. 230 - 239)",954100000],
]

sm.setSpeakerID(9071004)
if not sm.getParty() is None:
    sm.sendSayOkay("Please leave your party to enter Monster Park.")
    sm.dispose()

elif sm.getChr().getLevel() < minLv:
    sm.sendSayOkay("You need to be at least Level {} to enter.".format(minLv))
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
    else:
        if sm.sendAskYesNo("#eToday is #b"+ sm.getDay() +"#k.\r\n\r\n" +
                           "Selected Dungeon: #b"+ maps[selection][0] +"#k\r\n" +
                           "Clearing the dungeon will use up #bone of your free clears#k \r\nfor today.\r\n\r\n" +
                           "Would you like to enter the dungeon?"):
            sm.warpInstanceIn(maps[selection][1])
            sm.createQuestWithQRValue(GameConstants.MONSTER_PARK_EXP_QUEST, "0")
            sm.setInstanceTime(GameConstants.MONSTER_PARK_TIME, 951000000)
