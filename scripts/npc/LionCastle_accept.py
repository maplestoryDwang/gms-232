# Lionheart Castle Von Leon Entrance
from net.swordie.ms.constants import BossConstants
from net.swordie.ms.enums import BossCooldown

sm.setSpeakerID(9000212)
if sm.getFieldID() == BossConstants.VON_LEON_EASY_FIELDID or sm.getFieldID() == BossConstants.VON_LEON_NORMAL_FIELDID or sm.getFieldID() == BossConstants.VON_LEON_HARD_FIELDID:
    if sm.sendAskYesNo("Would you like to leave the fight?"):
        sm.warpInstanceOut(211070000, 0)
else:

    sm.sendNext("#e<Boss:Von Leon>#n \r\n Are you brave enough to face Von Leon?#b\r\n \r\n"
                    "#L0#Apply to enter Von Leon expedition.#l\r\n")
    response = sm.sendNext("#e<Boss:Von Leon>#n \r\n Select a mode. \r\n \r\n"
                                "#L0#Easy(Level 125+) #l \r\n"
                                "#L1#Normal (Level 125+) #l \r\n"
                                "#L2#Hard (Level 125+) #l \r\n")
    if response == 0:
        if sm.getParty() is None:
            sm.sendSayOkay("Please create a party before going in.")
        elif not sm.isPartyLeader():
            sm.sendSayOkay("Please have your party leader enter if you wish to face Von Leon.")
        elif sm.checkParty(BossCooldown.VonLeonEasy, 125):
            sm.warpInstanceIn(BossConstants.VON_LEON_EASY_FIELDID, 0, True)
            sm.setInstanceTime(BossConstants.VON_LEON_TIME)
            sm.setDeathCount(BossConstants.VON_LEON_DEATHCOUNT)
            sm.setBossCooldown(BossCooldown.VonLeonEasy)

    elif response == 1:
        if sm.getParty() is None:
            sm.sendSayOkay("Please create a party before going in.")
        elif not sm.isPartyLeader():
            sm.sendSayOkay("Please have your party leader enter if you wish to face Von Leon.")
        elif sm.checkParty(BossCooldown.VonLeon, 125):
            sm.warpInstanceIn(BossConstants.VON_LEON_NORMAL_FIELDID, 0, True)
            sm.setInstanceTime(BossConstants.VON_LEON_TIME)
            sm.setDeathCount(BossConstants.VON_LEON_DEATHCOUNT)
            sm.setBossCooldown(BossCooldown.VonLeon)

    elif response == 2:
        if sm.getParty() is None:
            sm.sendSayOkay("Please create a party before going in.")
        elif not sm.isPartyLeader():
            sm.sendSayOkay("Please have your party leader enter if you wish to face Von Leon.")
        elif sm.checkParty(BossCooldown.VonLeonHard, 125):
            sm.warpInstanceIn(BossConstants.VON_LEON_HARD_FIELDID, 0, True)
            sm.setInstanceTime(BossConstants.VON_LEON_TIME)
            sm.setDeathCount(BossConstants.VON_LEON_DEATHCOUNT)
            sm.setBossCooldown(BossCooldown.VonLeonHard)
