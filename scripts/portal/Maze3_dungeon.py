from net.swordie.ms.enums import BossCooldown

sm.setPlayerAsSpeaker()
response = sm.sendSayOkay("I need to enter the Altar of Despair and face #rVerus hilla#k.\r\n\r\n"
                          "#L0##rFight Verus Hilla#l\r\n"
                          "#L1##bLeave#l")

if response == 0:
    if sm.getParty() is None:
        sm.sendSayOkay("Please create a party before going in.")
    elif not sm.isPartyLeader():
        sm.sendSayOkay("Please have your party leader enter if you wish to face Verus Hilla.")
    elif sm.checkParty(BossCooldown.VerusHilla, 130):
        sm.warpInstanceIn(450010500, 0, True)
        sm.setInstanceTime(30 * 60)
        sm.setBossCooldown(BossCooldown.VerusHilla)