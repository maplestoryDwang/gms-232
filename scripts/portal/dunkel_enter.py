#450012200
from net.swordie.ms.constants import BossConstants
from net.swordie.ms.enums import BossCooldown

sm.setPlayerAsSpeaker()
response = sm.sendSayOkay("We should start looking at #rDarknell#k.\r\n\r\n"
                          "#L0##rFight Darknell (Normal)#l\r\n"
                          "#L1##bFight Darknell (Hard)#l\r\n"
                          "#L2##kLeave#l")

info = [
    [BossConstants.DARKNELL_FIELD, BossCooldown.Darknell],
    [BossConstants.DARKNELL_HARD_FIELD, BossCooldown.DarknellHard],
]

if response != 2:
    actInfo = info[response]
    if sm.getParty() is None:
        sm.sendSayOkay("Please create a party before going in.")
    elif not sm.isPartyLeader():
        sm.sendSayOkay("Please have your party leader enter if you wish to face Gloom.")
    elif sm.checkParty(actInfo[1], 255):
        sm.warpInstanceIn(actInfo[0], 0, True)
        sm.setInstanceTime(30 * 60)
        sm.setDeathCount(10)
        sm.setBossCooldown(actInfo[1])
