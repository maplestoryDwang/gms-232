# 223030200
from net.swordie.ms.enums import BossCooldown
response = sm.sendAskYesNo("Would you like to battle scarlion and targa?")

currentMap = sm.getFieldID()
if response:
    if sm.getParty() is None:
        sm.sendSayOkay("Please create a party before going in.")
    elif not sm.isPartyLeader():
        sm.sendSayOkay("Please have your party leader enter the portal.")
    elif sm.checkParty(BossCooldown.ScarlionTarga):
        sm.warpInstanceIn(223030210, 0, True)
        sm.setInstanceTime(60 * 30)
        sm.setBossCooldown(BossCooldown.ScarlionTarga)
