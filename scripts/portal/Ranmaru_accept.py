# Ranmaru Entrance
from net.swordie.ms.constants import BossConstants
from net.swordie.ms.enums import BossCooldown
sm.setSpeakerID(9130001)
if sm.getFieldID() == BossConstants.RANMARU_NORMAL_MAP or sm.getFieldID() == BossConstants.RANMARU_HARD_MAP:
    if sm.sendAskYesNo("Would you like to leave the fight?"):
        sm.warpInstanceOut(807300100, 0)
else:
    sm.sendNext("#e<Boss: Ranmaru>#n \r\n Are you brave enough to face Ranmaru?#b\r\n \r\n"
                "#L0#Apply to enter Ranmaru expedition.#l\r\n")
    response = sm.sendNext("#e<Boss:Ranmaru>#n \r\n Select a mode. \r\n \r\n"
                           "#L0#Normal (Level 130+) #l \r\n"
                           "#L1#Chaos (Level 180+) #l \r\n")
    if response == 0:
        if sm.getParty() is None:
            sm.sendSayOkay("Please create a party before going in.")
        elif not sm.isPartyLeader():
            sm.sendSayOkay("Please have your party leader enter if you wish to face Ranmaru.")
        elif sm.checkParty(BossCooldown.Ranmaru, 130):
            sm.warpInstanceIn(BossConstants.RANMARU_NORMAL_MAP, 0, True)
            sm.setInstanceTime(BossConstants.RANMARU_TIMER)
            sm.setDeathCount(BossConstants.RANMARU_DEATHCOUNT)
            sm.setBossCooldown(BossCooldown.Ranmaru)
    elif response == 1:
        if sm.getParty() is None:
            sm.sendSayOkay("Please create a party before going in.")
        elif not sm.isPartyLeader():
            sm.sendSayOkay("Please have your party leader enter if you wish to face Ranmaru.")
        elif sm.checkParty(BossCooldown.RanmaruHard, 180):
            sm.warpInstanceIn(BossConstants.RANMARU_HARD_MAP, 3, True)
            sm.setInstanceTime(BossConstants.RANMARU_TIMER)
            sm.setDeathCount(BossConstants.RANMARU_DEATHCOUNT)
            sm.setBossCooldown(BossCooldown.RanmaruHard)