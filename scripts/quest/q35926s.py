# id 35926 (Glowpod), field 100051043
sm.setSpeakerType(3)
sm.setParam(548)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(1013358) # Pathfinder
sm.sendNext("#face0##b(刚才路上遇到的遗迹攻击兵。\r\n头上装着发光的东西。用那个东西……)#k")
sm.setSpeakerType(4)
sm.setSpeakerID(1013317) # Brie
res = sm.sendAskAccept("#face3##b(好,回到#m100051042#去吧。\r\n从#o2300208#身上搜集10个#i4036531# #t4036531#。)#k")
sm.setSpeakerType(3)
sm.sendNext("#face0#我有点事情需要确认一下。你在这里等一下。")
sm.setParam(36)
sm.setInnerOverrideSpeakerTemplateID(1013350) # Brie
sm.sendSay("#face0#啊,果然不愧是勇士……这么快就想到了办法。\r\n那我在这里等你。")
sm.startQuest(parentID)
