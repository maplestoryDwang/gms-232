# 1847s - [Evolution System] System Enhancement Mode 1
from net.swordie.ms.enums import UIType
sm.setSpeakerID(9075202)
if sm.sendAskYesNo("进化系统强化模式开始. 确定要实施进化系统吗? 连接到强化后的虚拟世界. "):
    sm.openUI(UIType.EVOLVING_SYSTEM)
    sm.startQuest(parentID)
else:
    sm.dispose()