# Mark of the Squad(2083004) | Cave of Life, Entrance to Horntail's Cave
from net.swordie.ms.constants import BossConstants
from net.swordie.ms.enums import BossCooldown

EASY_CYGNUS_MAP = 271041100
NORMAL_CYGNUS_MAP = 271040100
CYGNUS_ENTRANCE = 271040000

if sm.getFieldID() == BossConstants.CYGNUS_EASY_MAP or sm.getFieldID() == BossConstants.CYGNUS_NORMAL_MAP:
    if sm.sendAskYesNo("Would you like to leave the fight?"):
        sm.warpInstanceOut(CYGNUS_ENTRANCE, 0)
else:
    response = sm.sendNext("Would you like to fight Cygnus? \r\n #b#L0#Easy Mode (Level 140+)#l \r\n #L1#Normal Mode (Level 170+)#l")
    if response == 0:
        if sm.getParty() is None:
            sm.sendSayOkay("Please create a party before going in.")
        elif not sm.isPartyLeader():
            sm.sendSayOkay("Please have your party leader enter if you wish to face Cygnus.")
        elif sm.checkParty(BossCooldown.CygnusEasy, 140):
            sm.warpInstanceIn(BossConstants.CYGNUS_EASY_MAP, 0, True)
            sm.setInstanceTime(BossConstants.CYGNUS_TIME, CYGNUS_ENTRANCE)
            sm.setDeathCount(5)
            sm.setBossCooldown(BossCooldown.CygnusEasy)
    elif response == 1:
        if sm.getParty() is None:
            sm.sendSayOkay("Please create a party before going in.")
        elif not sm.isPartyLeader():
            sm.sendSayOkay("Please have your party leader enter if you wish to face Cygnus.")
        elif sm.checkParty(BossCooldown.Cygnus, 170):
            sm.warpInstanceIn(BossConstants.CYGNUS_NORMAL_MAP, 0, True)
            sm.setInstanceTime(BossConstants.CYGNUS_TIME , CYGNUS_ENTRANCE)
            sm.setDeathCount(5)
            sm.setBossCooldown(BossCooldown.Cygnus)