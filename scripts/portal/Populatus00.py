# Papulatus entrance portal
from net.swordie.ms.constants import BossConstants
from net.swordie.ms.enums import BossCooldown

info = {
    0: [115, 220080100, BossCooldown.PapulatusEasy, BossConstants.PAPULATUS_EASY_DC],
    1: [155, 220080200, BossCooldown.Papulatus, BossConstants.PAPULATUS_NORMAL_DC],
    2: [190, 220080300, BossCooldown.PapulatusHard, BossConstants.PAPULATUS_CHAOS_DC]
}

if sm.hasQuest(1662):
    sm.warpInstanceIn(931050427) # Silent Crusade Papu boss map
    sm.setInstanceTime(6 * 60, 220080000)

else:
    sm.setSpeakerID(2041021) # Mr. Bouffon
    sel = sm.sendNext("Do you want to fight Papulatus?\r\n\r\n"
                "#L0#Easy Mode (level 115 and above)#l\r\n"
                "#L1#Normal Mode (level 155 and above)#l\r\n"
                "#L2#Chaos Mode (level 190 and above)#l\r\n")

    reqLev = info[sel][0]
    toFieldId = info[sel][1]
    cd = info[sel][2]
    dc = info[sel][3]

    if sm.getParty() is None:
        sm.sendSayOkay("Please create a party before going in.")
    elif not sm.isPartyLeader():
        sm.sendSayOkay("Please have your party leader enter if you wish to face Papulatus.")
    elif sm.checkParty(cd, reqLev):
        sm.warpInstanceIn(toFieldId, 0, True)
        sm.setInstanceTime(BossConstants.PAPULATUS_TIME)
        sm.setDeathCount(dc)
        sm.setBossCooldown(cd)