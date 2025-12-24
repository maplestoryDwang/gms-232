#
# @author baking legion needs
# @npc Dame Appropiation - Legion Manager
# @quest [Legion] Defeat the Golden Wyvern
#
from net.swordie.ms.enums import DailyEntry

sm.setSpeakerID(9010106)
sm.sendSayOkay("Hey!\r\nHow's your #bLegion#k?\r\nWatching your Legion grow in strength fills me with pride.")
if not sm.sendAskYesNo("I have a #rtraining mission#k for you and your legion.\r\n\r\nSometimes, when you've defeated "
                       "enough #bDragon Whelps#k, a rare #rGolden Wyvern#k appears. Defeat #b20#k of them and I'll give "
                       "you #b#i4310229:# #t4310229# x20#k as a reward.\r\n\r\nThink you're up for the challenge?"
                       "\r\n\r\n#r#eNote:#k This quest can only be completed once per world per day.#k"):

    sm.sendSayOkay("Come visit me whenever you're ready for a #bmission#k")
else:
    sm.sendSayOkay("Excellent!\r\n#rGolden Wyverns#k spawn in the #rDragon's Domain#k which reached by starting a #bLegion Raid#k. Come visit me when you're ready to turn in your daily quests.\r\nGood luck!");
    sm.startQuest(16012)
    sm.reduceDailyEntry(DailyEntry.DefeatGoldenWyvern)
