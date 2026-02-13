# id 34806 (Special Activities), field 402000528
sm.setSpeakerType(3)
sm.setParam(36)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(3001301) # Agate
sm.sendNext("#face1#你好,伊利温,上课感觉怎么样？")
sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(3001350) # Illium
sm.sendSay("#face0#啊,阿加特大人！？")
sm.setInnerOverrideSpeakerTemplateID(3001301) # Agate
sm.sendSay("#face2#哈哈,吓到你了吧？通过点灯,可以进行远距离通话。")
sm.sendSay("#face0#不过啊,我听说今天的魔法战斗实习课上,你好像遇到点困难……")
sm.setInnerOverrideSpeakerTemplateID(3001350) # Illium
sm.sendSay("#face0#好吧……")
sm.setInnerOverrideSpeakerTemplateID(3001301) # Agate
sm.sendSay("#face0#嗯……学习魔法不是一蹴而就的事。")
sm.sendSay("#face1#不如这样吧？这学期你和我一起练习操控水晶力量。算是一种#b特别活动#k吧？")
sm.setInnerOverrideSpeakerTemplateID(3001350) # Illium
sm.sendSay("#face0#你说……特别……活动？")
sm.setInnerOverrideSpeakerTemplateID(3001301) # Agate
sm.sendSay("#face1#嗯。先好好上完这节课,下课后到我房间来吧。")
sm.createQuestWithQRValue(parentID, "scene=1;item1=1")
sm.startQuest(parentID)
sm.sendSay("#face2#下节课继续加油,我为你准备了一点药水。那待会见喽！")
sm.setInnerOverrideSpeakerTemplateID(3001350) # Illium
sm.sendSay("#face0#(阿加特大人……这么忙还为我的事费心……)")
sm.sendSay("#face0#(下课后去拜访阿加特大人吧。不过啊……今天还没过去……我就已经疲惫了……好想回家啊……)")
sm.sendSay("#face0#How about that, Ex? I'll be an expert in no time!")
