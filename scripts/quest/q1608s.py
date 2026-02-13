# [Silent Crusade] Into the Gate

STARLING = 9120221

sm.setSpeakerID(STARLING)
response = sm.sendAskYesNo("就是这个发着蓝色光的柱子让遗迹发掘地的怪物变得残暴起来的吗？不知道会发生什么，我要走近些看看。你准备好了吗？")

if response:
    sm.sendNext("如果发生什么危险的话一定要保护我啊。那么，一…二…三！")

    sm.warpInstanceIn(931050410, 0)
    sm.startQuest(parentID)
else:
    sm.sendSayOkay("No?..")