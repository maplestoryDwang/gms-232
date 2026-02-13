# id 17667 ([Commerci Republic] Plans from Heaven), field 865030111
sm.setSpeakerID(9390238) # Zion
sm.setParam(32)
sm.setColor(1)
sm.sendNext("你为什么要装死？你的目的是什么！")
sm.setParam(56)
sm.sendSay("我应该没有义务回答你的问题吧？而且，你们应该没有权利抓住我不放吧？")
sm.setParam(32)
sm.sendSay("(这家伙，嘴巴还挺紧！#h0#，你能让这家伙开口吗？)")
sm.setParam(36)
sm.setInnerOverrideSpeakerTemplateID(9390202) # Leon Daniella
res = sm.sendAskYesNo("喂，莱文，人质没必要有头发吧？还有这个难看的胡子。")
sm.startQuest(parentID)
sm.setParam(56)
sm.sendNext("是啊，完全没必要啊。其实衣服也没必要吧？")
sm.setParam(36)
sm.sendSay("是啊，把头发和胡子全部剃掉，衣服也脱下来，那他估计就不能逃跑了，这个主意不错啊。让我看看，拔胡子应该用镊子吧……")
sm.setParam(56)
sm.sendSay("其实那些像要暗杀我的人是我的手下。")
sm.setParam(36)
sm.setInnerOverrideSpeakerTemplateID(9390207) # Zion
sm.sendSay("看来你现在才想说啊。")
sm.setParam(56)
sm.sendSay("该死……！")
