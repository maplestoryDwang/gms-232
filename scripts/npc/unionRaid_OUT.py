# Npc   9010108     Dame Appropriation
# Field 921172200   Legion Raid: Legion Raid Exit

from net.swordie.ms.constants import QuestConstants

coins = chr.getUnionRaid().getUnclaimedCoins()
if coins > 0:
    sm.sendSayOkay("You already collected #b" + str(coins) + " #k of #b#i4310229:##t4310229##k? "
                                                             "That's impressive!\r\nI'll go ahead and update your #bWeekly Coin Rank#k!"
                                                             "\r\n\r\n#bThis Week's Coin Total#k#e: " + str(
        coins) + "#n"
                 "\r\n\r\nThen I'll send you back to where you came from. Bye!")
    sm.addUnionCoin(coins, True)

else:
    sm.sendNext(
        "Uh, it doesn't look like you've earned any Legion Coins. If you're having a tough time with raiding, just come back later. Your Legion members will continue the raid even after you've left.")
    sm.sendSayOkay("I'll send you back to where you were. See you later.")

quest = chr.getQuestManager().getOrCreateQuestById(QuestConstants.UNION_MAP)
toFieldId = quest.getIntProperty("map")
if toFieldId == 0:
    toFieldId = 100000000
sm.warp(toFieldId)
