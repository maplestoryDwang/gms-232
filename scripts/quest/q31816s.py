# 31816 | Magnus Questline
sm.setSpeakerID(3001000)
sm.sendNext("这期间，我们要做的事情变得更加明确了。首先我们需要尽可能多的信息。穿越西北边茂密的森林地区，就能看到一个破旧的茅屋。")
sm.sendNext("那里应该会有一位诺巴老人，人称贤者的#b#p3001002##k。")
sm.sendNext("平时是个没用的老头子，但我活了很长时间，拥有各种各样的智慧。紧急时刻我能帮得上忙。去找#b#p3001002##k获得建议吧。")
sm.sendNext("看样子你们关系不太好……")
sm.setPlayerAsSpeaker()
sm.sendNext("哼，我才懒得跟他搞好关系。咳咳，总之你去见见#b#p3001002##k吧。")
sm.setSpeakerID(3001000)
if sm.sendAskYesNo("你到了就说是#b#p3001000##k让你去的。还有，看他有什么反应，以后记得向我报告。"):
    sm.sendNext("你见过哈伦了吗？")
    sm.startQuest(parentID)
    sm.warp(401020100)