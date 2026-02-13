# id 35920 (Compass Fragment 3), field 100051034
sm.setSpeakerType(3)
sm.setParam(36)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(1013350) # Brie
sm.sendNext("#face0#虽然威力不敢保证……但我想到了一个会嘭嘭爆炸的东西。\r\n过去村里举办节日的时候,曾经用它制作过烟花。")
sm.sendSay("#face0#那时使用的材料……让我想想……啊,对了,易燃的木柴和火石……\r\n都是在附近可以找到的东西。")
sm.sendSay("#face0#在之前那些森林虫身上应该能找到那两样东西。\r\n就是木森林虫和石森林虫。")
sm.setSpeakerType(4)
sm.setSpeakerID(1013314) # Brie
res = sm.sendAskAccept("#face0#请你从森林虫身上搜集#b#i4036529# #t4036529##k和#b#i4036530# #t4036530##k各#b5个#k。\r\n哪里能找到森林虫,你应该已经知道了。")
sm.startQuest(parentID)
