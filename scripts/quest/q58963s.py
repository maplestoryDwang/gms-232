# id 58963 ([Hieizan Temple] Jars at Rest 2), field 811000018
sm.setSpeakerID(9130108) # Mysterious Boy
sm.setParam(4)
sm.setInnerOverrideSpeakerTemplateID(9130107) # Mysterious Boy
sm.sendNext("把这些坛子放在东塔前面的石阶上就行。简单吧？那里可是风水宝地…… ")
sm.sendSay("你知道吗？这个废弃寺院里游荡着很多灵魂。")
sm.setParam(16)
sm.sendSay(" (感觉到了奇怪的气息，眼前的人和一开始的少年似乎不是一个人。)")
sm.setParam(4)
res = sm.sendAskYesNo("请你把这些坛子放在石阶上吧。")
sm.startQuest(parentID)
sm.sendSayOkay("点击石阶就能放上去了。")
