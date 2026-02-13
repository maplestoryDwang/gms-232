# id 17671 ([Commerci Republic] San Commerci, I Missed You), field 865030300
sm.setSpeakerID(9390236) # Leon Daniella
sm.sendNext("回来啦。如何？结界里面有什么吗？")
sm.setParam(2)
sm.sendSay("我没有往深处去所以也不太清楚。我只到了结界的入口就感到了非同一般的杀气就没再往里去了。")
sm.setParam(0)
res = sm.sendAskYesNo("做得好。再往深处去如果发生什么事的话就麻烦了。好了，那我们回桑凯梅尔兹吧？")
sm.startQuest(parentID)
sm.setParam(2)
sm.sendNext("好吧，赶紧回去吧。克莱尔也累了。")
sm.setParam(4)
sm.setInnerOverrideSpeakerTemplateID(9390205) # Claire Tremier
sm.sendSay("我呢……就到入口就行了。因为我可不能碰见我父亲……")
sm.setParam(0)
sm.sendSay("啊，那就那样吧。好了，走吧")
sm.warp(865000000)
