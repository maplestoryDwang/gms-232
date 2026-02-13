# id 37162 ([Elodin] Mood Lighting), field 101082000
sm.setSpeakerID(1501001) # Ruenna the Fairy
sm.setParam(4)
sm.setInnerOverrideSpeakerTemplateID(1501013) # Ruenna the Fairy
sm.sendNext("都搜集到了吗？")
sm.sendSay("这么多，应该就能把房子全部照亮了。")
sm.lockInGameUI(True, False)
sm.removeAdditionalEffect()
sm.blind(False, 0, 0, 0, 0, 1000)
sm.showFadeTransition(0, 1000, 3000)
sm.zoomCamera(0, 1000, 2147483647, 2147483647, 2147483647)
sm.moveCamera(True, 0, 0, 0)
sm.sendDelay(300)
sm.removeOverlapScreen(1000)
sm.moveCamera(True, 0, 0, 0)
sm.lockInGameUI(False, True)
sm.setParam(5)
sm.setInnerOverrideSpeakerTemplateID(1501010) # Baby Bird
sm.sendNext("切……自己说要想唱好歌，就必须得到森林之光的映照……")
sm.setInnerOverrideSpeakerTemplateID(1501013) # Ruenna the Fairy
sm.sendSay("我听到了。")
sm.setParam(3)
sm.sendSay("......")
