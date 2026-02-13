# id 22725 (Jay's On The Case), field 331001000
sm.setSpeakerType(3)
sm.setParam(37)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(1531001) # Jay
sm.sendNext("凯内西斯, 你的手应该洗干净了吧？\r\n听说光是认真洗手, 就已经能够预防大部分的传染病了。")
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendSay("别再跟我提这些公益广告的内容了，倒是说说你究竟发现什么了吧。")
sm.setInnerOverrideSpeakerTemplateID(1531001) # Jay
sm.sendSay("#face3#嗯，事情变得越来越有趣了呢。")
sm.lockInGameUI(True, False)
sm.changeBGM("Bgm43.img/Unknown Part Of City", 0, 0)
sm.blind(True, 200, 0, 0, 0, 1300)
sm.sendDelay(1600)
sm.sendNext("你还记得用W.M.这个ID的人吗？那个在网上周期性地发出加密信息的ID。")
sm.sendSay("一开始大家都觉得他没什么了不起的，但是随着时间的推移……")
sm.sendSay("人们发现那个信息发出来的时间，和城市里发生事件或事故的时间越来越重合，也就是说W.M.一旦发出信息，过不了多久城市里就会出现奇怪的怪物。")
sm.sendSay("有许多黑客都说W.M.是个预言家，但是……")
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendSay("这不可能的啊。")
sm.setInnerOverrideSpeakerTemplateID(1531001) # Jay
sm.sendSay("是啊，从常识的角度来看，与其说这是预言，倒不如说这更接近于是一种犯罪预告。这就是我们共同的意见。")
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendSay("难道你已经解读了W.M.的信息了吗，杰？")
sm.setInnerOverrideSpeakerTemplateID(1531001) # Jay
sm.sendSay("嗯，没想到还是蛮简单的。")
sm.sendSay("之所以其他国家的黑客未能破解是有原因的，只有将这个信息和相同时刻我们国家的电视台信号相结合才能得出答案，暗号本身只是莫斯码的一种变形，想要解开并不难。")
sm.sendSay("……就好像有种故意等待某人解开暗号的感觉呢。")
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendSay("警察都知道了吗？")
sm.setInnerOverrideSpeakerTemplateID(1531001) # Jay
sm.sendSay("应该还不知道吧，警察的网络调查网中并没有相应信息。")
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendSay("暗号的内容呢？")
sm.setInnerOverrideSpeakerTemplateID(1531001) # Jay
sm.sendSay("怪物出现的时间和地点，可是那个地点……好像就是#b凯内西斯你所上的学校#k。")
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendSay("#face4#……你说是#b学校#k？")
sm.setInnerOverrideSpeakerTemplateID(1531001) # Jay
sm.sendSay("#face0#怎么样，很奇怪吧？")
sm.blind(False, 0, 0, 0, 0, 1300)
sm.sendDelay(1600)
sm.completeQuestNoCheck(parentID)
sm.lockInGameUI(False, True)
