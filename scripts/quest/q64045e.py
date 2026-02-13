# id 64045 ([MONAD: The First Omen] High Quality Meat), field 867201000
sm.lockInGameUI(True, False)
sm.completeQuestNoCheck(parentID)
sm.sendDelay(500)
sm.flipNpcByTemplateId(9400587, False)
sm.sendDelay(500)
sm.moveNpcByTemplateId(9400587, False, 110, 50)
sm.flipNpcByTemplateId(9400584, False)
sm.flipNpcByTemplateId(9400580, False)
sm.sendDelay(2000)
sm.playSound("Sound/PL_MONAD.img/EP1/ACT2/open", 128)
sm.sendDelay(250)
sm.spawnNpc(9400597, 858, -45)
sm.showNpcSpecialActionByTemplateId(9400597, "summon", 0)
sm.sendDelay(1000)
sm.setSpeakerType(3)
sm.setParam(37)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(9400597) # Gurnardson
sm.sendNext("#face0#咳咳，都收集来了？我看看")
sm.sendSay("#face0#嗯……不错！你们不愧是猎人~！咦，可汗村长眼睛怎么肿了？")
sm.setInnerOverrideSpeakerTemplateID(9400587) # Kan
sm.sendSay("#face0#……现在可以收留我们了吗？")
sm.setInnerOverrideSpeakerTemplateID(9400597) # Gurnardson
sm.sendSay("#face0#咳嗯~~~咳！且慢！")
sm.sendDelay(1000)
sm.playSound("Sound/PL_MONAD.img/EP1/ACT2/close", 128)
sm.sendDelay(500)
sm.flipNpcByTemplateId(9400589, False)
sm.moveNpcByTemplateId(9400589, False, 850, 100)
sm.setInnerOverrideSpeakerTemplateID(9400582) # Cayne
sm.sendNext("#face0#有种不妙的预感。")
sm.setInnerOverrideSpeakerTemplateID(9400580) # Alika
sm.sendSay("#face4#这人……真没教养。")
sm.setParam(57)
sm.sendSay("#b……得趁夜幕降临之前赶紧进去啊……")
sm.sendDelay(5000)
sm.playSound("Sound/PL_MONAD.img/EP1/ACT2/open", 128)
sm.sendDelay(250)
sm.spawnNpc(9400597, 858, -45)
sm.showNpcSpecialActionByTemplateId(9400597, "summon", 0)
sm.sendDelay(1000)
sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(9400597) # Gurnardson
sm.sendNext("#face0#我看了一下，我们这儿没地方给你们睡啊？")
sm.sendSay("#face0#夜晚这么寒冷，总得在地上铺点什么才行吧？咳咳")
sm.sendSay("#face0#你们去收集些狼人的厚实毛发，弄到了我就让你们进来。")
sm.setInnerOverrideSpeakerTemplateID(9400587) # Kan
sm.sendSay("#face0#……你这是在得寸进尺吗？")
sm.sendSay("#face0#你有没有点人性？大难当头，就只顾自己保命！！！！！！！")
sm.flipNpcByTemplateId(9400580, False)
sm.moveNpcByTemplateId(9400580, False, 270, 80)
sm.sendDelay(2000)
sm.setInnerOverrideSpeakerTemplateID(9400580) # Alika
sm.sendNext("#face4#……可汗村长，我也很气愤……但现在不是发火的时候。")
sm.sendSay("#face4#你们彼此斗了那么久，自然不可能因为有了共同的敌人，就一下子变得和睦起来。如果想改善相互的关系，我们就必须拿出和之前不同的态度来。")
sm.sendSay("#face4#像现在这样意气用事的话……")
sm.setInnerOverrideSpeakerTemplateID(9400589) # Peytour
sm.sendSay("#face0#说得对……艾丽卡学者的话很有道理。")
sm.sendSay("#face0#目前这种不和睦，也是我们自己造成的，不能全怪他们。")
sm.sendSay("#face0#眼下他们抱着这样不友好的态度，如果我们也同样予以回击，就无法指望有任何改变。")
sm.setInnerOverrideSpeakerTemplateID(9400597) # Gurnardson
sm.sendSay("#face0#我说，斯巴乐缇村长，你真有心收留我们吗？")
sm.setInnerOverrideSpeakerTemplateID(9400587) # Kan
sm.sendSay("#face0#嘁，这还用问吗？！真无语，你的意思是我现在在撒谎耍你们？")
sm.setInnerOverrideSpeakerTemplateID(9400589) # Peytour
sm.sendSay("#face0#知道了。只要你真有心，我们去收集狼人毛发，这次希望你遵守约定。")
sm.setInnerOverrideSpeakerTemplateID(9400597) # Gurnardson
sm.sendSay("#face0#咳咳，好。")
sm.setInnerOverrideSpeakerTemplateID(9400589) # Peytour
sm.sendSay("#face0#骑士们已经很辛苦了，先歇会儿吧。我去收集。")
sm.setInnerOverrideSpeakerTemplateID(9400597) # Gurnardson
sm.sendSay("#b我也一起去！")
sm.sendDelay(1000)
sm.playSound("Sound/PL_MONAD.img/EP1/ACT2/close", 128)
sm.sendDelay(500)
sm.flipNpcByTemplateId(9400589, True)
sm.sendDelay(500)
sm.setInnerOverrideSpeakerTemplateID(9400587) # Kan
sm.sendNext("#face0#... ")
sm.setInnerOverrideSpeakerTemplateID(9400581) # Butler
sm.sendSay("#face1#Hahh... ")
sm.setInnerOverrideSpeakerTemplateID(9400589) # Peytour
sm.sendSay("#face0#Since the knights have already done so much, I ask that you take this time to rest. I will go myself. ")
sm.setParam(57)
sm.sendSay("#bI'm coming with you! ")
sm.sendDelay(1000)
sm.blind(True, 255, 0, 0, 0, 500)
sm.sendDelay(500)
sm.startQuest(64047)
sm.lockInGameUI(False, True)
sm.warp(867201160)
