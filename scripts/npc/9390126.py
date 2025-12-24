# Gollux: Heart
from net.swordie.ms.constants import BossConstants
from net.swordie.ms.enums import BossCooldown

EASY = 1
NORMAL = 2
HARD = 3
HELL = 4

drops = [[],
        [(1132243, 2000), (1122264, 2000)], #easy
        [(1132243, 2000), (1122264, 2000), (1132244, 1200), (1122265, 1200)],  #normal
        [(1132243, 2000), (1122264, 2000), (1132244, 1200), (1122265, 1200), (1132245, 800), (1122266, 800)],  #hard
        [(1132243, 2000), (1122264, 2000), (1132244, 1200), (1122265, 1200), (1132245, 800), (1122266, 800), (1132246, 300), (1122267, 300)]]  #hell

coins = {
    EASY: [3, 7],
    NORMAL: [7, 15],
    HARD: [15, 25],
    HELL: [25, 40]
}


def setupGollux():
    sm.setDeathCount(BossConstants.GOLLUX_DEATH_COUNT)
    sm.warpInstanceIn(863010100, 0, True)
    sm.setInstanceTime(BossConstants.GOLLUX_TIME, 863010000)
    sm.setBossCooldown(BossCooldown.Gollux)

if sm.getFieldID() == 863010700:
    difficulty = 4
    if chr.getInstance().getField(863010240).hasProperty(BossConstants.GOLLUX_FINISHED_KEY):
        difficulty -= 1
    if chr.getInstance().getField(863010430).hasProperty(BossConstants.GOLLUX_FINISHED_KEY):
        difficulty -= 1
    if chr.getInstance().getField(863010330).hasProperty(BossConstants.GOLLUX_FINISHED_KEY):
        difficulty -= 1

    field.drop(sm.genDropInfoFromPyTuples(drops[difficulty]), sm.newPosition(42, 74), chr.getId())
    coinQuant = coins[difficulty][0] + sm.getRandomIntBelow(coins[difficulty][1] - coins[difficulty][0]) + 1
    sm.dropItem(4310097, coinQuant, 100, 74)

    sm.removeNpc(9390126)

else:
    sm.setSpeakerID(9390124) # Heart Tree Guardian
    response = sm.sendAskYesNo("Would you like to battle Gollux?")
    if response:
        if sm.getParty() is None:
            sm.sendSayOkay("Please create a party before going in.")
        elif not sm.isPartyLeader():
            sm.sendSayOkay("Please have your party leader enter if you wish to face Gollux.")
        elif sm.checkParty(BossCooldown.Gollux):
            setupGollux()