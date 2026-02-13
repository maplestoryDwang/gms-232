# id 22721 (Vice President's Piece), field 331002000
sm.setSpeakerType(3)
sm.setParam(37)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(1531002) # Yuna
sm.sendNext("#face3##b#h0##k，你知道最近新闻、社交网站、搜索网站上到处都是你的ID，已经引发热点问题了吗？")
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendSay("你这么小声嘀咕做什么？大声点说。")
sm.setInnerOverrideSpeakerTemplateID(1531002) # Yuna
sm.sendSay("#face4#要是被别人听到了怎么办！\r\n一般的英雄都会隐瞒自己的真实身份，自己惴惴不安的，怎么你就搞得周围人跟着受累呢？")
sm.setInnerOverrideSpeakerTemplateID(1531001) # Jay
sm.sendSay("#face9##fs12#没错。")
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendSay("你冷静点，目前也就只有我们三个知道我的真实身份。")
sm.setInnerOverrideSpeakerTemplateID(1531002) # Yuna
sm.sendSay("你也真是的……反正你有件事要帮我去做。\r\n为了体育室维修工程，我需要我们学校100名学生的签名。")
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendSay("#face2#当然我们副会长都会做好的吧？")
sm.setInnerOverrideSpeakerTemplateID(1531002) # Yuna
res = sm.sendNext("我已经拿到了97名学生的签名，剩下3个人的签名你去要吧，#b#h0##k。\r\n#b#L1#知道了，这点事情就帮你做好了。#l\r\n#L2#什么？好麻烦！#l")
sm.sendNext("什么状况，你居然也有这么亲切的时候。")
res = sm.sendAskYesNo("#face3#偶尔也会忠于自己的本分啊。")
sm.sendNext("去学校里帮我要三个学生的签名吧，这点事还是可以做的吧？")
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendSay("我会在这里等着的。")
sm.startQuest(parentID)
