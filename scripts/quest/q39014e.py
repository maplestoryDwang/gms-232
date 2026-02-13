# id 39014 ([Daily Quest] Chu Chu's Finest Cuisine), field 450002000
from net.swordie.ms.client.character.items import BodyPart
from net.swordie.ms.constants import QuestConstants
sm.setSpeakerID(3003152) # Master Lyck
sm.sendNext("舔！所有辅助工作都完成了吗！非常好，我把")

if sm.levelArcaneSymbol(BodyPart.AFChuChu, 3):
    sm.completeQuestNoCheck(parentID)
    sm.createQuestWithQRValue(QuestConstants.CHU_CHU_COUNT_QUEST, "")
    sm.sendSayOkay(":#和1个#i2614029:# #t2614029:#给你！舔舔！")
else:
    sm.sendSayOkay("Something went wrong.")


