# id 22741 (Enjoying the Wait 1), field 101020400
sm.setSpeakerType(3)
sm.setParam(37)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendNext("只有等那个叫汉斯的人来了，我才能知道详细的情况说明是吧？\r\n要是我直接过去，是不是能够更快见到面啊？")
sm.setInnerOverrideSpeakerTemplateID(1531004) # Three Moon
sm.sendSay("等待也是一种内心的修炼，\r\n你是害怕等待啊。")
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendSay("……得准备晚餐了，要是客人也能搭把手我肯定会很开心的。")
sm.setInnerOverrideSpeakerTemplateID(1531004) # Three Moon
sm.sendSay("#face0##ho#，汉斯估计不会花太久的。\r\n我们一起去收集#b鸟蛋#k吧，只要打猎#b麻雀#k就可以了。")
sm.setParam(36)
sm.setInnerOverrideSpeakerTemplateID(1531003) # Nero
res = sm.sendAskYesNo("打猎？好吧，那应该挺有趣的，也可以顺带去看看外面什么样，你也帮我介绍介绍。")
sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendNext("#face1#往#b右边#k走吧，鸟蛋超好吃的。\r\n亚乌也很擅长做菜。")
sm.setInnerOverrideSpeakerTemplateID(1531003) # Nero
sm.sendSay("#face1#We can leave to the #bright#k. Boy, I love eggs! Especially if Three Moon is cooking ")
sm.startQuest(parentID)
