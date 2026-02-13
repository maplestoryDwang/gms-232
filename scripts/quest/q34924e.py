# id 34924 (Crystal-Powered Airship), field 402000614
sm.setSpeakerType(3)
sm.setParam(36)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(3001508) # Zippy
sm.sendNext("#face0#维依，看到那个空着的地方了吧？必须在那里装上一个叫动力源的东西，这艘船才能启动。")
sm.setInnerOverrideSpeakerTemplateID(3001510) # Ferret
sm.sendSay("#face0#叽勒，叽勒楞……我走近一点，试着捕捉电波，叽，叽勒楞……")
sm.sendSay("#face3#嗯……拜托……一定要找到……今天的占卜结果不坏……应该没问题吧……")
sm.setInnerOverrideSpeakerTemplateID(3001508) # Zippy
sm.sendSay("#face4#啊，虽然很微弱，但我感知到了某种电波。和这里的电波完全相反的另一种电波……")
sm.setInnerOverrideSpeakerTemplateID(3001510) # Ferret
sm.sendSay("#face0#叽，叽勒，但奇怪的是，电波好像分散在各处。也许是因为探测器太旧了，叽勒。")
sm.sendSay("#face0#有的在很近的地方……有的在很远的地方，叽，叽勒楞……嘿，嘿，就只能感测到这些了……")
sm.sendSay("#face0#It's close by, but also far away. I'm just not sure.")
sm.completeQuestNoCheck(parentID)
sm.startQuest(11620)
sm.createQuestWithQRValue(15710, "lasttime=19/02/21/12/44")
sm.createQuestWithQRValue(parentID, "exp=1;e1=1")
