# [Commerci Republic] A Chat with Gilberto


sm.setSpeakerID(9390203) # Gilberto Daniella
sm.sendNext("嗯，顺利地赶走了阿库旁多。我想一段时间内，它们应该不会来袭击了。")

sm.setPlayerAsSpeaker() # Has to be Player Avatar
sm.sendNext("那么简单就处理好了？嗯，中间没有别的问题了？")

sm.setSpeakerID(9390203) # Gilberto Daniella
response = sm.sendAskYesNo("是的，统帅…… 实际上……")

sm.setSpeakerID(9390256) # Leon Daniella
sm.sendNext("嗯，多亏了莱文出众的领导力，没有遇到什么大问题。")

sm.setPlayerAsSpeaker() # Has to be Player Avatar
sm.sendNext("(喂，你干嘛说谎啊？)")

sm.setSpeakerID(9390256) # Leon Daniella
sm.sendNext("那真是个好消息。没有遇到什么困难？")

sm.setSpeakerID(9390203) # Gilberto Daniella
sm.sendNext("(那些不愉快的事情，没有必要说出来。)")

sm.setSpeakerID(9390203) # Gilberto Daniella
sm.sendNext("嗯…… 也许是我低估了莱文。")

sm.setPlayerAsSpeaker() # Has to be Player Avatar
sm.sendNext("啊，还有，我们在回来的路上发现了奇怪的结界。")

sm.setSpeakerID(9390203) # Gilberto Daniella
sm.sendNext("结界？是什么结界？")

sm.setPlayerAsSpeaker() # Has to be Player Avatar
sm.sendNext("我们那时太疲惫，而且不知道会不会遇到什么危险，我们就没进入结界内部。")

sm.setSpeakerID(9390203) # Gilberto Daniella
sm.sendNext("嗯…… 我知道了。我会另外派人去调查结界的。辛苦你了。你和莱文一起去休息吧。")
sm.startQuest(parentID)
sm.dispose()
