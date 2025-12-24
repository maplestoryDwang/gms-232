# Mark of the Squad(2083004) | Cave of Life, Entrance to Horntail's Cave
from net.swordie.ms.constants import BossConstants
from net.swordie.ms.enums import BossCooldown

NORMAL_PB_MAP = 270050100
CHAOS_PB_MAP = 270051100
PB_ENTRANCE = 270050000

info = {
    0: [160, BossCooldown.PinkBean, NORMAL_PB_MAP],
    1: [170, BossCooldown.PinkBeanHard, CHAOS_PB_MAP]
}

response = sm.sendNext("Would you like to fight #rPink Bean#k?\r\n"
                       "#b#L0#Normal Mode (Level 160+)#l\r\n"
                       "#L1#Chaos Mode (Level 170+)#l")

reqLv = info[response][0]
cd = info[response][1]
toFieldId = info[response][2]

if sm.getParty() is None:
    sm.sendSayOkay("Please create a party before going in.")
elif not sm.isPartyLeader():
    sm.sendSayOkay("Please have your party leader enter if you wish to face Cygnus.")
elif sm.checkParty(cd, reqLv):
    sm.warpInstanceIn(toFieldId, 0, True)
    sm.setInstanceTime(BossConstants.PINK_BEAN_TIME, PB_ENTRANCE)
    sm.setDeathCount(5)
    sm.setBossCooldown(cd)