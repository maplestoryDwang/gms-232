# id 34928 (Ferreting Out the Signal), field 402000600
sm.setSpeakerType(3)
sm.setParam(36)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(3001508) # Zippy
sm.sendNext("#face0#嗯……来啦。在你帮助巴克巴克的时候，维依又搜索了一下电波……果然分散在各处。")
sm.sendSay("#face0#首先，最好从距离避难处最近的电波开始确认……怎么样……要去看看吗？")
sm.setSpeakerType(4)
sm.setSpeakerID(3001400) # Zippy
res = sm.sendAskAccept("#face0#谢谢你，亚克。和维依一起，到捕捉到电波的位置去确认一下吧。")
sm.setSpeakerType(3)
sm.setInnerOverrideSpeakerTemplateID(3001510) # Ferret
sm.sendNext("#face4#啊，感觉到电波的地方是#r#m402000615##k。我想马上去确认一下，叽，叽勒。")
sm.startQuest(parentID)
