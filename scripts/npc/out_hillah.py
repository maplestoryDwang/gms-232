# Medina (2183003) | Azwan Refuge Zone : Azwan
from net.swordie.ms.constants import GameConstants
from net.swordie.ms.enums import BossCooldown

sm.setSpeakerID(2183001)
if sm.getFieldID() >= 262030100:
    if sm.getFieldID() <= 262031300:
        if sm.sendAskYesNo("Would you like to leave the boss fight?"):
            sm.warpInstanceOut(262000000, 0)

else:
    sm.sendNext("#e<Boss:Hilla>#n \r\n \r\n Are you ready to defeat Hilla and liberate Azwan? Make sure everyone in "
                "your party is here!\r\n\r\n \r\n#L0##bRequest to enter <Boss: Hilla>#l#n")
    response = sm.sendNext(
        "#e<Boss:Hilla>#n\r\n\r\nChoose a mode.\r\n\r\n\r\n#L0#Normal (level 120+)#l\r\n#L1#Hard (Level 170+)#l")
    if response == 0:
        if sm.getParty() is None:
            sm.sendSayOkay("Please create a party before going in.")
        elif not sm.isPartyLeader():
            sm.sendSayOkay("Please have your party leader enter if you wish to face Hilla.")
        elif sm.checkParty(BossCooldown.Hilla, 120):
            sm.warpInstanceIn(262030100, 0, True)
            sm.setInstanceTime(30 * 60)
            sm.createQuestWithQRValue(GameConstants.EASY_HILLA_QUEST, "1")
            sm.setDeathCount(10)
            sm.setBossCooldown(BossCooldown.Hilla)
    if response == 1:
        if sm.getParty() is None:
            sm.sendSayOkay("Please create a party before going in.")
        elif not sm.isPartyLeader():
            sm.sendSayOkay("Please have your party leader enter if you wish to face Hilla.")
        elif sm.checkParty(BossCooldown.HillaHard, 170):
            sm.warpInstanceIn(262031100, 0, True)
            sm.setInstanceTime(30 * 60)
            sm.createQuestWithQRValue(GameConstants.EASY_HILLA_QUEST, "1")
            sm.setDeathCount(10)
            sm.setBossCooldown(BossCooldown.HillaHard)