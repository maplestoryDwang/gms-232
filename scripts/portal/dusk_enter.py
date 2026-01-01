from net.swordie.ms.constants import BossConstants
from net.swordie.ms.enums import BossCooldown

sm.setPlayerAsSpeaker()
response = sm.sendSayOkay("We should start looking at #rGloom#k.\r\n\r\n"
                          "#L0##rFight Gloom#l\r\n"
                          "#L1##bFight Gloom (Chaos)#l\r\n"
                          "#L2##kLeave#l")

info = [
    [BossConstants.GLOOM_FIELD, BossCooldown.Gloom],
    [BossConstants.GLOOM_HARD_FIELD, BossCooldown.GloomHard],
]

if response != 2:
    actInfo = info[response]
    if sm.getParty() is None:
        sm.sendSayOkay("Please create a party before going in.")
    elif not sm.isPartyLeader():
        sm.sendSayOkay("Please have your party leader enter if you wish to face Gloom.")
    elif sm.checkParty(actInfo[1], 245):
        sm.warpInstanceIn(actInfo[0], 0, True)
        sm.setInstanceTime(30 * 60)
        sm.setDeathCount(10)
        sm.setBossCooldown(actInfo[1])
