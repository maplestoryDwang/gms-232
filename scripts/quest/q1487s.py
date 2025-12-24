#   [Job Adv] (5th job)   5th Job : Arcane stone of Grandis
from net.swordie.ms.constants import BossConstants

sm.setSpeakerID(1540943)
if not sm.hasQuestCompleted(parentID):
    if sm.sendAskYesNo("I know you can do it. \r\n\r\n #b(Would you like to fight magnus right now?)"):
        sm.setDeathCount(BossConstants.MAGNUS_DEATHCOUNT)
        sm.warpInstanceIn(940100200, 0, False)
    else:
        sm.sendSayOkay("Okay, come back when you are ready to prove yourself.")
else:
    sm.sendNext("...")
    sm.sendSayOkay("I don't think I have any business with you.")
