# Adobis - Entrance To (Easy/Chaos) Zakum's Altar
from net.swordie.ms.enums import BossCooldown

fields = {
    211042402 : 280030200, # Easy
    211042400 : 280030100, # Normal
    211042401 : 280030000 # Chaos
}

cds = {
    211042402 : BossCooldown.ZakumEasy, # Easy
    211042400 : BossCooldown.Zakum, # Normal
    211042401 : BossCooldown.ZakumHard # Chaos
}

EYE_OF_FIRE = 4001017

response = sm.sendAskYesNo("Are you sure you want to go in?")
toField = fields[sm.getFieldID()]
cd = cds[sm.getFieldID()]

if response:
    if sm.getParty() is None:
        sm.sendSayOkay("Please create a party before going in.")
    elif not sm.isPartyLeader():
        sm.sendSayOkay("Please have your party leader talk to me if you wish to face Zakum.")
    elif sm.checkParty(cd):
        if sm.canHold(EYE_OF_FIRE):
            sm.giveItem(EYE_OF_FIRE)
        sm.setBossCooldown(cd)
        sm.warpInstanceIn(fields[sm.getFieldID()], 0, True)
