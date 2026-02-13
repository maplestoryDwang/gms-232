# id 37160 ([Elodin] Ruenna's Feathered Nuisance), field 101082000
sm.lockInGameUI(True, False)
sm.removeAdditionalEffect()
sm.blind(True, 255, 0, 0, 0, 0)
sm.sendDelay(500)
sm.forcedFlip(True)
sm.sendDelay(500)
sm.blind(True, 150, 0, 0, 0, 1300)
sm.sendDelay(1000)
sm.forcedFlip(True)
sm.sendDelay(500)
sm.forcedAction(10, 0)
sm.playSound("Sound/Reactor.img/2002001/0/Hit", 200)
sm.sendDelay(1000)
sm.playSound("Sound/SoundEff.img/Elodin/scream_close", 200)
sm.setSpeakerID(1501003) # Baby Bird
sm.setParam(5)
sm.setInnerOverrideSpeakerTemplateID(1501010) # Baby Bird
sm.sendNext("……我还以为你很胆小，没什么用呢。没想到力气还挺大的嘛。")
sm.setInnerOverrideSpeakerTemplateID(1501013) # Ruenna the Fairy
sm.sendSay("干嘛打我！干嘛打我！")
sm.setInnerOverrideSpeakerTemplateID(1501010) # Baby Bird
sm.sendSay("再不闭嘴，我就让你再也叫不出来。")
sm.setParam(3)
sm.sendSay("不过那样对付那个可怜的小家伙，也太野蛮了！怎么能那样对待它呢？")
sm.createQuestWithQRValue(37150, "00=h0;01=h1;02=h0;03=h2")
sm.sendDelay(1000)
sm.setParam(5)
sm.setInnerOverrideSpeakerTemplateID(1501013) # Ruenna the Fairy
sm.sendNext("是吧？那我就再……")
sm.setInnerOverrideSpeakerTemplateID(1501010) # Baby Bird
sm.sendSay("哎呀，你想再被打一顿吗？我觉得它再受一次冲击，应该就能清醒过来了。你觉得怎么样？")
sm.setInnerOverrideSpeakerTemplateID(1501013) # Ruenna the Fairy
sm.sendSay("呜呜……")
sm.setInnerOverrideSpeakerTemplateID(1501010) # Baby Bird
sm.sendSay("你之前都在干嘛啊……为什么要等到现在……")
sm.setParam(3)
sm.sendSay("当然要等你来做了。我是森林的朋友，怎么忍心伤害小鸟呢？")
sm.setParam(5)
sm.setInnerOverrideSpeakerTemplateID(1501013) # Ruenna the Fairy
sm.sendSay("嘎啊！")
sm.setParam(3)
sm.sendSay("......")
sm.sendDelay(1000)
sm.showFadeTransition(0, 1000, 3000)
sm.zoomCamera(0, 1000, 2147483647, 2147483647, 2147483647)
sm.moveCamera(True, 0, 0, 0)
sm.sendDelay(300)
sm.removeOverlapScreen(1000)
sm.moveCamera(True, 0, 0, 0)
sm.lockInGameUI(False, True)
sm.completeQuestNoCheck(parentID)
