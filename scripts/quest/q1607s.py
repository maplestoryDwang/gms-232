# [Silent Crusade] Stranger at the Gate

STARLING = 9120221

sm.setSpeakerID(STARLING)
sm.sendNext("果然不出我所料，就知道你会来。虽然比我想象的晚了点。")

sm.setPlayerAsSpeaker()
sm.sendSay("(……早知道不来了，这女人真奇怪。) 你还有什么话要说来着？")

sm.setSpeakerID(STARLING)
sm.sendSay("据我之前认识的遗迹发掘现场里的#b发掘队长杉峰#k说，这附近发现了奇怪的门。你来的路上见过吗？")

sm.setPlayerAsSpeaker()
sm.sendSay("没有啊，来的路上没见过那样的东西。")

sm.setSpeakerID(STARLING)
response = sm.sendAskYesNo("最近遗迹发掘地的怪物不知怎么的，突然变得很凶残，开始攻击附近的居民。我觉得跟那道门有些关系。")

if response:
    sm.sendNext("嗯，说不定真是那样。我也觉得有点巧合。")

    sm.sendNext("你愿意跟我一起去看看吗？我对那道门可是相当好奇呢。不过我是路痴……我已经跟杉峰打听过去那里的路线，我们一起去的话，肯定很快就能找的的。")

    sm.warp(102040600, 1)
    sm.startQuest(parentID)