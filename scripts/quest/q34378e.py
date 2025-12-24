# id 34378 ([Daily Quest] A Night's piece in lachelein), field 450003100
from net.swordie.ms.client.character.items import BodyPart
from net.swordie.ms.constants import QuestConstants
sm.setSpeakerID(3003209) # Gray Mask
sm.sendNext("#h0#, I see you completed all your missions for the week. Please accept a level up on #i1712003:# #t1712003:# as a reward.")

if sm.levelArcaneSymbol(BodyPart.AFLachelein, 3):
    sm.completeQuestNoCheck(parentID)
    sm.createQuestWithQRValue(QuestConstants.LACHELEIN_COUNT_QUEST, "")
    sm.sendSayOkay("I've leveled up your symbol. Please come back next week!")
else:
    sm.sendSayOkay("Something went wrong.")

