# id 22743 (Finding Fanzy), field 101020400
sm.setSpeakerType(3)
sm.setParam(37)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(1531004) # Three Moon
sm.sendNext("那现在可以吃了吗？")
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendSay("不立刻屈服于自己当下的欲望也算是一种不错的修炼，\r\n若是执着于眼前的饥饿就看不到远方了。")
sm.setInnerOverrideSpeakerTemplateID(1531004) # Three Moon
sm.sendSay("#face1#(咯吱咯吱咯吱)")
sm.setInnerOverrideSpeakerTemplateID(1531003) # Nero
sm.sendSay("……话说回来，汉斯晚了啊。\r\n看来我还是得和客人一起出去找找比较好。")
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendSay("#face1#(咯吱咯吱咯吱)")
sm.setInnerOverrideSpeakerTemplateID(1531004) # Three Moon
sm.sendSay("……这孩子一旦开始吃就什么都听不到。\r\n真是抱歉，你能去看看吗？")
sm.setInnerOverrideSpeakerTemplateID(1531003) # Nero
sm.sendSay("你去找#b巨大的树#k的#b潘喜#k。\r\n估计他会知道汉斯的行踪。")
sm.setInnerOverrideSpeakerTemplateID(1531004) # Three Moon
sm.sendSay("你记住，#b巨大的树#k上的猫#b潘喜#k。")
sm.setParam(36)
res = sm.sendAskYesNo("料理已经完成了。")
sm.setParam(37)
sm.sendNext("Remember, it is at the #bGiant Tree#k that you will find #bFanzy#k the cat.")
sm.startQuest(parentID)
sm.avatarOriented("UI/tutorial.img/11")
