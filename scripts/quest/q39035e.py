# id 39035 ([Daily Quest] Peace in Arcana), field 45005000
from net.swordie.ms.client.character.items import BodyPart
from net.swordie.ms.constants import QuestConstants
sm.setSpeakerID(3003309) # Tree Spirits
sm.sendNext("#h0#, I see you completed all your missions for the week. Please accept a level up on #i1712004:# #t1712004:# as a reward.")

if sm.levelArcaneSymbol(BodyPart.AFArcana, 3):
    sm.completeQuestNoCheck(parentID)
    sm.createQuestWithQRValue(QuestConstants.ARCANA_COUNT_QUEST, "")
    sm.sendSayOkay("I've leveled up your symbol. Please come back next week!")
else:
    sm.sendSayOkay("Something went wrong.")


