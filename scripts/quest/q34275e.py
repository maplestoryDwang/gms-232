# id 34275 ([Daily Quest] Save the Morass), field 450006130
from net.swordie.ms.client.character.items import BodyPart
from net.swordie.ms.constants import QuestConstants
sm.setSpeakerID(3003432) # Jean
sm.sendNext("今天的委托全部完成了吗？太好了！我把")

if sm.levelArcaneSymbol(BodyPart.AFMorass, 3):
    sm.completeQuestNoCheck(parentID)
    sm.createQuestWithQRValue(QuestConstants.MORASS_COUNT_QUEST, "")
    sm.sendSayOkay(":#和1个#i2614029:# #t2614029:#给你。")
else:
    sm.sendSayOkay("Something went wrong.")

