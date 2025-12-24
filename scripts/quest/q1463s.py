#   [Job Adv] (5th job)   5th Job : Arcane stone of Grandis
from net.swordie.ms.constants import BossConstants

sm.setSpeakerID(1540943)
if not sm.hasQuestCompleted(parentID):
    sm.sendNext("Welcome, stranger. \r\n\r\n I'll lend you my power if you're willing to protect this world.")
    sm.sendNext("If you want my help, then you have to prove your strength and bravery to me. Can you confront #rMagnus#k?")
    sm.startQuest(parentID)
else:
    sm.sendNext("...")
    sm.sendSayOkay("I don't think I have any business with you.")
