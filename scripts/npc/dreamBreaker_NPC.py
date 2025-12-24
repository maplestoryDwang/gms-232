from net.swordie.ms.constants import BossConstants
from net.swordie.ms.enums import BossCooldown

cd = BossCooldown.Lucid

sel = sm.sendSayOkay("Hello friendo, what can I do for you today?\r\n\r\n#L0#Defend dreams#l\r\n#L1#Fight lucid#l")
if sel == 0:
    sm.sendSayOkay("Alan please add Dream Defender")
else:
    if sm.getParty() is None:
        sm.sendSay("Please create a party before going in.")
    elif not sm.isPartyLeader():
        sm.sendSay("Please have your party leader enter if you wish to face Lucid.")
    elif sm.checkParty(cd):
        sm.setBossCooldown(cd)
        sm.warpInstanceIn(450004150, 0, True)
        sm.setInstanceTime(BossConstants.LUCID_TIMER)  # 30min
        sm.setDeathCount(BossConstants.LUCID_DEATHCOUNT)
