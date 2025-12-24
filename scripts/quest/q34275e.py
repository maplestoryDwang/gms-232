# id 34275 ([Daily Quest] Save the Morass), field 450006130
from net.swordie.ms.client.character.items import BodyPart
from net.swordie.ms.constants import QuestConstants
sm.setSpeakerID(3003432) # Jean
sm.sendNext("#h0#, I see you completed all your missions for the week. Please accept a level up on #i1712005:# #t1712005:# as a reward.")

if sm.levelArcaneSymbol(BodyPart.AFMorass, 3):
    sm.completeQuestNoCheck(parentID)
    sm.createQuestWithQRValue(QuestConstants.MORASS_COUNT_QUEST, "")
    sm.sendSayOkay("I've leveled up your symbol. Please come back next week!")
else:
    sm.sendSayOkay("Something went wrong.")

