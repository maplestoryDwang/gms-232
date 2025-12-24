# id 34773 ([Daily Quest] Esfera Research Orders), field 450007040
from net.swordie.ms.client.character.items import BodyPart
from net.swordie.ms.constants import QuestConstants
sm.setSpeakerID(3003500) # Ollie
sm.sendNext("#h0#, I see you completed all your missions for the week. Please accept a level up on #i1712006:# #t1712006:# as a reward.")

if sm.levelArcaneSymbol(BodyPart.AFEsfera, 3):
    sm.completeQuestNoCheck(parentID)
    sm.createQuestWithQRValue(QuestConstants.ESFERA_COUNT_QUEST, "")
    sm.sendSayOkay("I've leveled up your symbol. Please come back next week!")
else:
    sm.sendSayOkay("Something went wrong.")

