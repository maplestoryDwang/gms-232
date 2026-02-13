# id 17657 ([Commerci Republic] Who's That Lady?), field 865030000
sm.setSpeakerID(9390249) # Robed Lady
sm.sendNext("我是谁真的有那么重要吗？")
sm.setParam(4)
sm.setInnerOverrideSpeakerTemplateID(9390202) # Leon Daniella
sm.sendSay("我们可是互相救过命又互相帮助的关系嘛。以后也那样就好了。所以我希望我们能明确一下关系。")
sm.setParam(0)
res = sm.sendAskYesNo("好吧。既然你都这么说了，我就告诉你吧。你做好吃惊的准备了吗？")
sm.sendNext("好吧，哎咦。")
sm.startQuest(parentID)
