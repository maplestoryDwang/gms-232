# id 39035 ([Daily Quest] Peace in Arcana), field 45005000
from net.swordie.ms.client.character.items import BodyPart
from net.swordie.ms.constants import QuestConstants
sm.setSpeakerID(3003309) # Tree Spirits
sm.sendNext("     谢谢你对我们的帮助。请接受我们的礼物，")

if sm.levelArcaneSymbol(BodyPart.AFArcana, 3):
    sm.completeQuestNoCheck(parentID)
    sm.createQuestWithQRValue(QuestConstants.ARCANA_COUNT_QUEST, "")
    sm.sendSayOkay(":#和1个#i2614029:# #t2614029:#。")
else:
    sm.sendSayOkay("Something went wrong.")


