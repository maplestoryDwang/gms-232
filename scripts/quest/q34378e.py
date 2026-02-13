# id 34378 ([Daily Quest] A Night's piece in lachelein), field 450003100
from net.swordie.ms.client.character.items import BodyPart
from net.swordie.ms.constants import QuestConstants
sm.setSpeakerID(3003209) # Gray Mask
sm.sendNext("#ho#，你完成了今天的全部委托了啊。真是太谢谢你了。这是")

if sm.levelArcaneSymbol(BodyPart.AFLachelein, 3):
    sm.completeQuestNoCheck(parentID)
    sm.createQuestWithQRValue(QuestConstants.LACHELEIN_COUNT_QUEST, "")
    sm.sendSayOkay(":#和1个#i2614029:# #t2614029:#，作为我的一份心意。")
else:
    sm.sendSayOkay("Something went wrong.")

