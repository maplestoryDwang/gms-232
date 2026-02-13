# id 35912 (Hero, Hero!), field 100051020
sm.setSpeakerType(3)
sm.setParam(548)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(1013358) # Pathfinder
sm.sendNext("#face6#不是全都逃走了吗？你为什么会在这里？")
sm.setParam(36)
sm.setInnerOverrideSpeakerTemplateID(1013350) # Brie
sm.sendSay("#face0#勇士……你带在身上的东西,我看到了。\r\n那个东西……跟村外的废墟有什么关系吗？")
sm.setParam(548)
sm.setInnerOverrideSpeakerTemplateID(1013358) # Pathfinder
sm.sendSay("#face0#那又怎样？")
sm.setParam(36)
sm.setInnerOverrideSpeakerTemplateID(1013350) # Brie
sm.sendSay("#face1#我们卡鲁帕害怕废墟。\r\n因为会听到轰隆隆……咣当当的奇怪声音。")
sm.sendSay("#face1#怪声越来越严重,但我们卡鲁帕能做的事情……\r\n就是虔诚地举行祭典。")
sm.sendSay("#face1#谁也不想去弄清楚废墟中到底发生了什么事。\r\n因,因为害怕。")
sm.sendSay("#face1#呃啊……光是想想,就浑身发抖。\r\n但,但是总不能一直这样下去。")
sm.sendSay("#face1#必须有人……站出来,解决这件事。\r\n但是我太害怕了……勇士,你看上去好像很强……")
sm.setParam(548)
sm.setInnerOverrideSpeakerTemplateID(1013358) # Pathfinder
sm.sendSay("#face0#所以,你到底想说什么？")
sm.setParam(36)
sm.setInnerOverrideSpeakerTemplateID(1013350) # Brie
sm.sendSay("#face1#啊,我……我想说的是……\r\n那个……嗯……要是你不嫌弃我是个笨蛋,又很胆小……")
sm.sendSay("#face1#勇士,请你带我去一起去进行调查！")
sm.setParam(548)
sm.setInnerOverrideSpeakerTemplateID(1013358) # Pathfinder
sm.sendSay("#face0#哦,你又能帮上什么忙呢？")
sm.setParam(36)
sm.setInnerOverrideSpeakerTemplateID(1013350) # Brie
sm.sendSay("#face0#那,那个……我也能帮上忙。虽然我不擅长战斗……\r\n但是对村子周围的地形很熟悉。")
sm.sendSay("#face0#还有……我认识一个长得有点奇怪,但很聪明的朋友……")
sm.sendSay("#face0#那个人……叫高尔根。他是个怪人,一直在村外观察废墟。\r\n他的爱好是收集各种奇怪的东西。")
sm.setSpeakerType(4)
sm.setSpeakerID(1013307) # Brie
res = sm.sendAskAccept("#face0#去找那个家伙,说不定能知道一些有用的东西。\r\n嗯……我可以把你介绍给高尔根。")
sm.setSpeakerType(3)
sm.setParam(548)
sm.setInnerOverrideSpeakerTemplateID(1013358) # Pathfinder
sm.sendNext("#face0##b(虽然不喜欢跟人同行,但还是跟过去看看吧。\r\n说不定可以获得什么情报。)#k")
sm.sendSay("#face6#我最讨厌跟人在一起。调查结束之后,不许再缠着我。")
sm.setParam(36)
sm.setInnerOverrideSpeakerTemplateID(1013350) # Brie
sm.sendSay("#face2#啊,你的意思是……愿意带我一起去,是吗？\r\n谢谢你,勇士。我会尽量不给你添麻烦的。")
sm.completeQuestNoCheck(parentID)
sm.startQuest(11620)
sm.createQuestWithQRValue(15710, "lasttime=19/07/08/13/37")
