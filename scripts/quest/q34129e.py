# id 34129 ([Daily Quest] Vanishing Journey Research), field 450001000
from net.swordie.ms.client.character.items import BodyPart
from net.swordie.ms.constants import QuestConstants
sm.setSpeakerID(3003104) # Rona
sm.sendNext("#ho#，你完成了今天的全部任务。来，我把")

if sm.levelArcaneSymbol(BodyPart.AFVanishinJourney, 3):
    sm.completeQuestNoCheck(parentID)
    sm.createQuestWithQRValue(QuestConstants.VANISHING_JOURNEY_COUNT_QUEST, "")
    sm.sendSayOkay(":#和1个#i2614029:# #t2614029:#送给你。")
else:
    sm.sendSayOkay("Something went wrong.")

