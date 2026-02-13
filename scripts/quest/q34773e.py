# id 34773 ([Daily Quest] Esfera Research Orders), field 450007040
from net.swordie.ms.client.character.items import BodyPart
from net.swordie.ms.constants import QuestConstants
sm.setSpeakerID(3003500) # Ollie
sm.sendNext("感谢你的努力工作。给，这是你的报酬，")

if sm.levelArcaneSymbol(BodyPart.AFEsfera, 3):
    sm.completeQuestNoCheck(parentID)
    sm.createQuestWithQRValue(QuestConstants.ESFERA_COUNT_QUEST, "")
    sm.sendSayOkay(":#和1个#i2614029:# #t2614029:#。")
else:
    sm.sendSayOkay("Something went wrong.")

