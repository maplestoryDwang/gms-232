# id 22720 (Jay's Gripe), field 331001000
sm.lockInGameUI(True, False)
sm.setSpeakerType(3)
sm.setParam(37)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(1531001) # Jay
sm.sendNext("系统全都比较顺畅，这次也似乎并没有什么大的报错。\r\n这段时间累积数据会比较重要，等到数据增多后就行升级。")
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendSay("那得赶紧准备下一个版本了吧？看你最近的活跃表现，总觉得很快就需要升级版本了吧？")
sm.setInnerOverrideSpeakerTemplateID(1531001) # Jay
sm.sendSay("超，能，力，者，你倒是替我想想最近我的工作量有多大，昨天我就得在三个区的监控视频数据里将你的影子给去掉。")
sm.sendSay("算我求你了，就算你是想当英雄，能不能拜托你也遮遮你的脸啊？")
res = sm.sendNext("你对遮着脸这件事，是怎么想的？\r\n#b\r\n#L1#为什么啊？多麻烦。#l\r\n#L2#实际状况之下我是没那个时间的。#l\r\n#L3#帅气的遮着脸可对这个世界不礼貌啊。#l")
sm.createQuestWithQRValue(parentID, "done=1")
sm.sendNext("啊……你要这么回答我是吧，真不愧是你的作风。")
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendSay("如果你真的想要，把你那个搞笑的眼罩借我怎么样？\r\n如果你想要的不是超能力者而是猫人，我倒是不妨戴上一天。")
sm.setInnerOverrideSpeakerTemplateID(1531001) # Jay
sm.sendSay("不可以，就算你是我的朋友，也不许碰我的东西。会传染到外界的细菌的。")
sm.playSound("Sound/SoundEff.img/PvP/80001740_Use", 100)
sm.onLayer(500, "0", 800, 0, 12, "Map/Effect2.img/kinesis/chaJay", 5, True, -1, False)
sm.moveLayer(300, "0", -800, 0)
sm.sendDelay(5000)
sm.playSound("Sound/SoundEff.img/12thMS/jump_m", 100)
sm.offLayer(500, "0", False)
sm.moveLayer(300, "0", 800, 0)
sm.sendDelay(1000)
sm.sendNext("真是的，话说回来，你不在这段期间，愤怒的#b尤娜#k曾经来过，她让我把这个交给你。")
sm.startQuest(parentID)
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendSay("额……这东西一看就知道很没意思啊？难不成是学生会的会议录……？")
sm.setInnerOverrideSpeakerTemplateID(1531001) # Jay
sm.sendSay("尤娜应该会在学校里等着，估计等的时间越久，尤娜的愤怒值就会越高的。")
sm.sendSay("你可不要告诉我，因为你太久没去学校，已经不记得学校的位置了，出去右拐就是。")
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendSay("#b(去外面找尤娜吧。)#k")
sm.sendDelay(1000)
sm.lockInGameUI(False, True)
