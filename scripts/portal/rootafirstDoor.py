from net.swordie.ms.enums import BossCooldown

sm.setSpeakerID(1064012) # First Seal Door
response = sm.sendNext("Would you like to fight Pierre?\r\n #b#L0#Normal Mode#l \r\n #L1#Chaos Mode #l")


if response == 0:
    if sm.getParty() is None:
        sm.sendSayOkay("Please create a party before going in.")
    elif not sm.isPartyLeader():
        sm.sendSayOkay("Please have your party leader enter if you wish to face Pierre.")
    elif sm.checkParty(BossCooldown.Pierre):
        sm.warpInstanceIn(105200200, 0, True) # West Garden
        sm.setInstanceTime(10 * 60)
        sm.setDeathCount(5)
        sm.setBossCooldown(BossCooldown.Pierre)
elif response == 1:
    if sm.getParty() is None:
        sm.sendSayOkay("Please create a party before going in.")
    elif not sm.isPartyLeader():
        sm.sendSayOkay("Please have your party leader enter if you wish to face Pierre.")
    elif sm.checkParty(BossCooldown.PierreHard):
        sm.warpInstanceIn(105200600, 0, True) # West Garden
        sm.setInstanceTime(10 * 60)
        sm.setDeathCount(5)
        sm.setBossCooldown(BossCooldown.PierreHard)