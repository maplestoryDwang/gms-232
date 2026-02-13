# id 34818 (Escape from the Academy), field 940202032
sm.lockInGameUI(True, False)
sm.removeAdditionalEffect()
sm.showFadeTransition(0, 1000, 3000)
sm.zoomCamera(0, 1000, 2147483647, 2147483647, 2147483647)
sm.moveCamera(True, 0, 0, 0)
sm.sendDelay(300)
sm.removeOverlapScreen(1000)
sm.setSpeakerType(3)
sm.setParam(37)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(3001310) # Morian
sm.sendNext("#face2#谢啦伊利温！！不过你到底怎么回事？那个水晶是什么？")
sm.setInnerOverrideSpeakerTemplateID(3001353) # Illium
sm.sendSay("#face3#是阿加特大人的遗物古代水晶。因为释放的力量太过强大，我暂时把力量减弱了一些。")
sm.setInnerOverrideSpeakerTemplateID(3001310) # Morian
sm.sendSay("#face2#遗物……？你说遗物！？")
sm.blind(True, 200, 0, 0, 0, 1300)
sm.sendDelay(1600)
sm.setInnerOverrideSpeakerTemplateID(3001353) # Illium
sm.sendNext("#face4#……(向莫里奥和希娜说明情况。)")
sm.blind(False, 0, 0, 0, 0, 1300)
sm.sendDelay(1600)
sm.setInnerOverrideSpeakerTemplateID(3001310) # Morian
sm.sendNext("#face3#怎么可能……阿加特大人……竟然去世了……")
sm.setInnerOverrideSpeakerTemplateID(3001311) # Sinaria
sm.sendSay("#face3#虽然不知道我能不能帮上忙……但我也要一起去！")
sm.setInnerOverrideSpeakerTemplateID(3001310) # Morian
sm.sendSay("#face4#莫里奥，这是我的使命。绝不能让你也因我陷入危险之中！")
sm.setInnerOverrideSpeakerTemplateID(3001353) # Illium
sm.sendSay("#face3#可是……")
sm.setInnerOverrideSpeakerTemplateID(3001310) # Morian
sm.sendSay("#face4#先离开这吧。再待在这，我们就危险了！快，大家快走！")
sm.setInnerOverrideSpeakerTemplateID(3001353) # Illium
sm.sendSay("#face4#We can argue this later. Right now, we need to get out of here. We're all in a lot of danger!")
sm.showFadeTransition(0, 1000, 3000)
sm.zoomCamera(0, 1000, 2147483647, 2147483647, 2147483647)
sm.moveCamera(True, 0, 0, 0)
sm.sendDelay(300)
sm.removeOverlapScreen(1000)
sm.sendDelay(100)
sm.completeQuestNoCheck(parentID)
sm.sendDelay(100)
sm.createQuestWithQRValue(parentID, "exp=1")
sm.startQuest(11620)
sm.createQuestWithQRValue(15710, "lasttime=19/02/21/17/13")
sm.lockInGameUI(False, True)
