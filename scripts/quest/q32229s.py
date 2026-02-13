# id 32229 (Explorer Thief - Shadower), field 610050000
sm.setSpeakerID(1052001) # Dark Lord
sm.sendNext("选择了侠盗之路的你，对于冒险家的能力到底了解多少呢？")
res = sm.sendAskAccept("怎么样, 要不要了解下冒险家的基本技能?\r\n#r(接受时移动到另一个场所.)#k")
sm.startQuest(parentID)
sm.warp(910370111)
