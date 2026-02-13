# id 64028 ([MONAD: The First Omen] Role of a Chief), field 867200400
sm.lockInGameUI(True, False)
sm.setSpeakerType(3)
sm.setParam(37)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(9400587) # Kan
sm.sendNext("#face0#你怎么还在修房子？要我说多少遍，现在不是搞这些 的时候？！")
sm.setInnerOverrideSpeakerTemplateID(9400617) # Resident
sm.sendSay("不是说会再回来的吗……所以……我就想……")
sm.setInnerOverrideSpeakerTemplateID(9400587) # Kan
sm.sendSay("#face0#回来再修也不迟。当务之急是准备起程。你不会没看见暴风雪正在涌来吧？")
sm.sendDelay(1000)
sm.showEffect("Effect/OnUserEff.img/emotion/shade", 2000, 0, 0, 0, 17104721, 0, 0)
sm.sendDelay(1000)
sm.setInnerOverrideSpeakerTemplateID(9400617) # Resident
sm.sendNext("可我既没有要收拾的行李……也没有家人。")
sm.setInnerOverrideSpeakerTemplateID(9400587) # Kan
sm.sendSay("#face0#那你去帮帮其他人。现在没工夫干别的。")
sm.setInnerOverrideSpeakerTemplateID(9400617) # Resident
sm.sendSay("……可汗村长……我不想离开村子……")
sm.setInnerOverrideSpeakerTemplateID(9400587) # Kan
sm.sendSay("#face0#这事没得商量，卡夫塔佩的村民将一个不少地前往河对岸的村子。")
sm.setInnerOverrideSpeakerTemplateID(9400617) # Resident
sm.sendSay("我的意思不是要留下来。尽管不愿离开村子，但村长你已经做了决定，我正在努力遵从……可是，……")
sm.sendSay("我只是在想如何才能填补心里空落落的感受，把倒塌的屋子重新搭起来或许会好受些！所以……所以我才这么做。出发之前连这点时间都不能让我自己支配的话……我真是……")
sm.setInnerOverrideSpeakerTemplateID(9400587) # Kan
sm.sendSay("#face0#既然你一意孤行就没办法了，我不能让你这颗老鼠屎影响到其他人，你不用做事了，歇着吧。")
sm.setInnerOverrideSpeakerTemplateID(9400617) # Resident
sm.sendSay("天啊……有必要说得这么难听吗？")
sm.sendSay("……嘴太毒了。")
sm.sendDelay(1000)
sm.flipNpcByTemplateId(9400616, False)
sm.moveNpcByTemplateId(9400616, False, 100, 100)
sm.sendDelay(2000)
sm.sendDelay(1000)
sm.setParam(57)
sm.sendNext("#b可汗村长。")
sm.flipNpcByTemplateId(9400587, True)
sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(9400587) # Kan
sm.sendNext("#face0#我知道你在想什么，觉得我很过分吧。")
sm.setParam(57)
sm.sendSay("#face0#我也是无奈。留在这里的话，将没法保障安全。我的职责就是无论如何都要把所有人带到下个村子。")
sm.setParam(37)
sm.sendSay("#face0#我是在执行身为村长的职责……请你不要多管。")
sm.sendSay("#b可汗村长现在也在伤心吧？")
sm.sendSay("#face0#……我没这种闲工夫。")
sm.setParam(57)
sm.sendSay("#bChief Kan, this has to hurt you too, right? ")
sm.setParam(37)
sm.sendSay("#face1#...There is no time for me to feel. ")
sm.flipNpcByTemplateId(9400587, False)
sm.sendDelay(300)
sm.moveNpcByTemplateId(9400587, False, 100, 50)
sm.sendDelay(300)
sm.completeQuestNoCheck(parentID)
sm.lockInGameUI(False, True)
