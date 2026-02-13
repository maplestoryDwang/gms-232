# id 31816 (Dispatch Mission), field 401000001
sm.setSpeakerID(3001000) # Edea
sm.sendNext("这期间，我们要做的事情变得更加明确了。首先我们需要尽可能多的信息。穿越西北边茂密的森林地区，就能看到一个破旧的茅屋。")
sm.sendSay("那里应该会有一位诺巴老人，人称贤者的#b#p3001002##k。")
sm.sendSay("平时是个没用的老头子，但我活了很长时间，拥有各种各样的智慧。紧急时刻我能帮得上忙。去找#b#p3001002##k获得建议吧。")
sm.sendSay("看样子你们关系不太好……")
sm.setParam(2)
sm.sendSay("哼，我才懒得跟他搞好关系。咳咳，总之你去见见#b#p3001002##k吧。")
sm.setParam(0)
res = sm.sendAskAccept("你到了就说是#b#p3001000##k让你去的。还有，看他有什么反应，以后记得向我报告。")
sm.sendNext("你见过哈伦了吗？")
sm.startQuest(parentID)
sm.warp(401020100)
