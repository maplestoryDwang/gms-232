from net.swordie.ms.enums import BossCooldown
from net.swordie.ms.constants import BossConstants

sm.setSpeakerID(1064013) # Second Seal Door
response = sm.sendNext("Would you like to fight Von Bon?\r\n #b#L0#Normal Mode#l \r\n #L1#Chaos Mode #l")

if response == 0:
    if sm.getParty() is None:
        sm.sendSayOkay("Please create a party before going in.")
    elif not sm.isPartyLeader():
        sm.sendSayOkay("Please have your party leader enter if you wish to face Von Bon.")
    elif sm.checkParty(BossCooldown.VonBon):
        sm.warpInstanceIn(105200100, 0, True) # East Garden
        sm.setInstanceTime(BossConstants.VON_BON_TIME)
        sm.setDeathCount(5)
        sm.setBossCooldown(BossCooldown.VonBon)
elif response == 1:
    if sm.getParty() is None:
        sm.sendSayOkay("Please create a party before going in.")
    elif not sm.isPartyLeader():
        sm.sendSayOkay("Please have your party leader enter if you wish to face Von Bon.")
    elif sm.checkParty(BossCooldown.VonBonHard):
        sm.warpInstanceIn(105200500, 0, True) # East Garden
        sm.setInstanceTime(BossConstants.VON_BON_TIME)
        sm.setDeathCount(5)
        sm.setBossCooldown(BossCooldown.VonBonHard)