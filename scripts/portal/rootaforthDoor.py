from net.swordie.ms.enums import BossCooldown

sm.setSpeakerID(1064015) # Fourth Seal Door
response = sm.sendNext("Would you like to fight Vellum?\r\n #b#L0#Normal Mode#l \r\n #L1#Chaos Mode #l")

if response == 0:
    if sm.getParty() is None:
        sm.sendSayOkay("Please create a party before going in.")
    elif not sm.isPartyLeader():
        sm.sendSayOkay("Please have your party leader enter if you wish to face Vellum.")
    elif sm.checkParty(BossCooldown.Vellum):
        sm.warpInstanceIn(105200400, 0, True) # North Garden
        sm.setInstanceTime(30 * 60)
        sm.setDeathCount(10)
        sm.setBossCooldown(BossCooldown.Vellum)
elif response == 1:
    if sm.getParty() is None:
        sm.sendSayOkay("Please create a party before going in.")
    elif not sm.isPartyLeader():
        sm.sendSayOkay("Please have your party leader enter if you wish to face Vellum.")
    elif sm.checkParty(BossCooldown.VellumHard):
        sm.warpInstanceIn(105200800, 0, True) # North Garden
        sm.setInstanceTime(30 * 60)
        sm.setDeathCount(10)
        sm.setBossCooldown(BossCooldown.VellumHard)