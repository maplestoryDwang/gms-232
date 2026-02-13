# id 22721 (Vice President's Piece), field 331002000
sm.lockInGameUI(True, False)
sm.setSpeakerType(3)
sm.setParam(37)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(1531002) # Yuna
sm.sendNext("签名已经都要回来了吗？辛苦你了。")
sm.sendSay("#face3#那个，#b#h0##k。\r\n现在可不可以不要再继续扮那个危险的英雄了？")
sm.sendSay("#face3#虽说帮助他人真的是很不错的事情，但你的本分是个学生，你是学生会长啊。\r\n放下手头该做的事情不做，到处在其他地方闯祸，你觉得在网上看到你的这些情况，我的心情会怎么样？")
res = sm.sendNext("#face3#你怎么想，#b#h0##k？\r\n#b#L1#安抚尤娜#l\r\n#L2#转移话题#l")
sm.createQuestWithQRValue(parentID, "done1=1")
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendNext("#face2#哎哟，我们尤娜生气了啊？要是你一直这么生气，你这漂亮的小脸蛋可是会长皱纹的哦。")
sm.setInnerOverrideSpeakerTemplateID(1531002) # Yuna
sm.sendSay("#face1#这种话你还是说给那些喜欢跟在你屁股后面转的女孩子听吧？")
sm.sendSay("那种女孩子好像现在就在我面前啊？")
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendSay("#face1#什么……\r\n我什么时候跟在你屁股后面转了！")
sm.setInnerOverrideSpeakerTemplateID(1531002) # Yuna
sm.sendSay("#face2#我记得没错的话，应该是从十岁开始吧？")
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendSay("#face1#那还不是因为你整天闯祸……！")
sm.setInnerOverrideSpeakerTemplateID(1531002) # Yuna
sm.sendSay("#face2#嗯……总之，特意去事故现场实在是太危险的举动，\r\n每次看到你的新闻，我就惴惴不安的。")
sm.sendSay("#face2#你是担心我受伤吗？还是说担心我的粉丝越来越多？")
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendSay("#face1#那当然是！！！\r\n啊，真是的，每次和你对话，总觉得只有我变得越来越奇怪了。")
sm.setInnerOverrideSpeakerTemplateID(1531002) # Yuna
sm.sendSay("#face10##fs12#没错。")
sm.setInnerOverrideSpeakerTemplateID(1531001) # Jay
sm.sendSay("#face1#这个你拿去吧！还有至少来学校签到这种事情你得按时按点做吧！就因为你，我这个副会长也跟着遭殃了啊。")
sm.setInnerOverrideSpeakerTemplateID(1531002) # Yuna
sm.sendSay("#face2##b(我……总有种不安的感觉。)#k")
sm.sendSay("#face9#凯内西斯，你要是每次都这么调戏尤娜，小心日后会后悔哦？")
sm.createQuestWithQRValue(22700, "V01=1;V02=1;q21end=1;kinetuto=1;kinetuto2=1;E1=1;E2=1;E3=1")
sm.completeQuestNoCheck(parentID)
sm.startQuest(11620)
sm.sendDelay(1000)
sm.setInnerOverrideSpeakerTemplateID(1531001) # Jay
sm.sendNext("#face2#这么有趣，你叫我怎么办。")
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendSay("话说回来，你怎么每次都来插话？")
sm.sendSay("#face9#反正又不是一两回了，\r\n我可是支援你的，远程插话这件事你也得习惯起来了啊。")
sm.setInnerOverrideSpeakerTemplateID(1531001) # Jay
sm.sendSay("#fs20#\r\n\r\n#fEffect/BasicEff.img/QuestAlert/Default/0#\r\n按下界面左侧的电灯泡,  \r\n就可以查看远处抵达的任务. ")
sm.blind(True, 200, 0, 0, 0, 1300)
sm.sendDelay(1600)
sm.sayMonologue("#fs20#\r\n\r\n#fEffect/BasicEff.img/QuestAlert/Default/0#\r\nClick the lightbulb on the left side of your screen to check the quests that have arrived remotely.", 1)
sm.playExclSoundWithDownBGM("Voice3.img/Kinesis/guide_10", 100)
sm.blind(False, 0, 0, 0, 0, 1300)
sm.sendDelay(1600)
sm.lockInGameUI(False, True)
