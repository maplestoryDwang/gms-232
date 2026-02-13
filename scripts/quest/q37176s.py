# id 37176 ([Elodin] Another Chance!), field 101084400
sm.setSpeakerID(1501004) # Shimmer Songbird
sm.setParam(4)
sm.setInnerOverrideSpeakerTemplateID(1501015) # Shimmer Songbird
sm.sendNext("你能再帮我带来干净的泉水和莲花吗？")
sm.sendSay("请帮我带回#r21滴#k干净的泉水……灌满这个小水瓶就行了。\r\n莲花要多采一些，要#r10朵#k才够……")
sm.sendSay("这次我给你的水瓶在你#r获得干净的泉水时，会自动灌水#k。这样你就不用亲自去灌了。")
sm.setParam(2)
sm.sendSay("……那你干嘛不一开始就给我这种水瓶啊？")
sm.setParam(4)
sm.sendSay("要有诚意！诚意才是最重要的！\r\n唔……你要是愿意亲手灌水也不是……")
sm.sendSay("……不不，有这个水瓶就方便多了。")
sm.setParam(2)
sm.sendSay("啊！又要喝刚才的水，吃刚才的花吗？\r\n哇……太棒了！")
sm.setParam(4)
sm.setInnerOverrideSpeakerTemplateID(1501010) # Baby Bird
sm.sendSay("哈哈……")
sm.setParam(2)
res = sm.sendAskYesNo("Great...")
sm.startQuest(parentID)
sm.startQuest(parentID)
sm.setParam(4)
sm.setInnerOverrideSpeakerTemplateID(1501015) # Shimmer Songbird
sm.sendNext("Do you think that will be enough?")
sm.setParam(2)
sm.sendSay("Fingers crossed.")
sm.setParam(4)
sm.sendSay("Well, good luck.")
sm.warp(101084100)
