# id 34129 ([Daily Quest] Vanishing Journey Research), field 450001000
from net.swordie.ms.client.character.items import BodyPart
from net.swordie.ms.constants import QuestConstants
sm.setSpeakerID(3003104) # Rona
sm.sendNext("#h0#, I see you completed all your missions for the week. Please accept a level up on #i1712001:# #t1712001:# as a reward.")

if sm.levelArcaneSymbol(BodyPart.AFVanishinJourney, 3):
    sm.completeQuestNoCheck(parentID)
    sm.createQuestWithQRValue(QuestConstants.VANISHING_JOURNEY_COUNT_QUEST, "")
    sm.sendSayOkay("I've leveled up your symbol. Please come back next week!")
else:
    sm.sendSayOkay("Something went wrong.")

