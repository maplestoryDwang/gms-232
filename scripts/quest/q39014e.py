# id 39014 ([Daily Quest] Chu Chu's Finest Cuisine), field 450002000
from net.swordie.ms.client.character.items import BodyPart
from net.swordie.ms.constants import QuestConstants
sm.setSpeakerID(3003152) # Master Lyck
sm.sendNext("#h0#, I see you completed all your missions for the week. Please accept a level up on #i1712002:# #t1712002:# as a reward.")

if sm.levelArcaneSymbol(BodyPart.AFChuChu, 3):
    sm.completeQuestNoCheck(parentID)
    sm.createQuestWithQRValue(QuestConstants.CHU_CHU_COUNT_QUEST, "")
    sm.sendSayOkay("I've leveled up your symbol. Please come back next week!")
else:
    sm.sendSayOkay("Something went wrong.")


