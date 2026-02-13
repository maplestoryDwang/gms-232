# id 31827 (Tonero's Request), field 401020300
sm.setSpeakerID(3001004) # Tonero
sm.sendNext("毛皮你都搜集到了吗？")
sm.setParam(2)
sm.sendSay("#b嗯，都搜集好了。共100张。")
sm.setParam(0)
sm.sendSay("不错，只要稍微处理一下，估计能卖个大价钱。我这就给你第三个情报。(托内罗用悄悄话提供了第三个情报。)")
sm.sendSay("呵呵，你已经把三个情报都集齐了啊。跟守护者相比，你家伙运气挺好，异族人……嘿嘿。")
sm.sendSay("接下来你只要返回#b#p3001002##k老头那里，把情报传达给他就行。辛苦啦，呵呵，以后我们会再见面的。")
sm.sendSay("后会有期！")
sm.completeQuestNoCheck(31575)
sm.warp(401020100)
