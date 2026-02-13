# id 34810 (Carnelian's Request), field 402000513
sm.setSpeakerType(3)
sm.setParam(36)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(3001308) # Carnelian
sm.sendNext("#face0#(卡尼里恩不知道碰到了什么伤心事，泣不成声地呜咽起来。等她平复一些再开口吧。)")
sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(3001310) # Morian
sm.sendSay("#face2#那个……迪恩把我的#i4036167##t4036167#全都做成#b糖果#k了！")
sm.setParam(36)
sm.setInnerOverrideSpeakerTemplateID(3001308) # Carnelian
sm.sendSay("#face0#什么？噗！那家伙真是没救了！")
sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(3001310) # Morian
sm.sendSay("#face2#啊，所以说……")
sm.sendSay("#face4#那家伙，简！直！坏！透！了！")
sm.setInnerOverrideSpeakerTemplateID(3001350) # Illium
sm.sendSay("#face9#正好剩下一些，分你点啊？")
sm.setInnerOverrideSpeakerTemplateID(3001308) # Carnelian
sm.sendSay("#face0#真的吗？这也……可以？")
res = sm.sendNext("#face0#稍微给一点也行啊……我只要……5个左右就够了……\r\n#L0# #b选择1：只给1个。#l\r\n#L1# #b选择2：给4个。#l\r\n#L2# #b选择3：给7个。#l")
sm.sendNext("#face1#一、一个？谢、谢谢……哈哈……")
sm.createQuestWithQRValue(parentID, "give=7")
sm.setInnerOverrideSpeakerTemplateID(3001310) # Morian
sm.sendSay("#face1#那个糖果……可以分给我点吗？")
sm.setInnerOverrideSpeakerTemplateID(3001308) # Carnelian
sm.sendSay("#face1#嗯？啊……\r\n当然，当然了。这里。")
sm.setInnerOverrideSpeakerTemplateID(3001310) # Morian
sm.sendSay("#face1#哇~谢谢，我会好好享用的！")
sm.setInnerOverrideSpeakerTemplateID(3001308) # Carnelian
sm.sendSay("#face1#谢谢你们的帮助，孩子们。我们后会有期！")
sm.sendSay("#face0#若想结束课堂任务，则需要20个#i4036167##t4036167#。")
sm.startQuest(parentID)
sm.completeQuestNoCheck(parentID)
sm.createQuestWithQRValue(parentID, "exp=1;give=7")
sm.startQuest(11620)
sm.createQuestWithQRValue(15710, "lasttime=19/02/21/16/31")
sm.setInnerOverrideSpeakerTemplateID(3001300) # Ex
sm.sendSay("#face0#没关系。马上就能找到了。赶快回去收集吧。")
sm.createQuestWithQRValue(16700, "count=155;date=20190221")
sm.createQuestWithQRValue(16700, "count=156;date=20190221")
sm.setInnerOverrideSpeakerTemplateID(3001350) # Illium
sm.sendSay("#face0#为获得不足的#i4036167##t4036167#，需前往#m402000514#，#m402000515#，#m402000516#。")
sm.setInnerOverrideSpeakerTemplateID(3001300) # Ex
sm.sendSay("#face0#You will find more #i4036167# #t4036167# in #m402000514#, #m402000515#, and #m402000516#.")
sm.lockInGameUI(False, True)
