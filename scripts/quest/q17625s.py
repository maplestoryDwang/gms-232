# [Commerci Republic] Delfinos? More Like dead Fishos

sm.setSpeakerID(9390203) # Gilberto Daniella
response = sm.sendAskYesNo("你想了解更多关于阿库旁多的事情？")

if response:
    sm.sendNext("阿库旁多在很久之前就和我们共同存在了。实际上，虽然以前我们说不上是往来关系，但至少是中立关系。")
else:
    sm.sendSayOkay("虽然现在凯梅尔兹成为贸易发达的国家，但以前这里主要以渔业为主。不知从何时开始，这里通过贸易变得富有，开发了首都桑凯梅尔兹，还建了运河。")
    sm.dispose()

sm.sendNext("从那时开始，阿库旁多就开始敌对我们。大概他们认为是我们破坏了他们生活的地方。总之，之后他们就少数人聚集在一起开始袭击旅行者和商人。")

sm.sendNext("所以，我们这次想要教训下阿库旁多那些家伙。")

sm.sendNext("#b(就是这个！！)#k\r\n统帅，请把我也编入阿库旁多讨伐团吧。")

sm.setPlayerAsSpeaker() # Has to be Player Avatar
sm.sendNext("嗯？这不是你国家的事情，你为什么打算参与呢？")

sm.setSpeakerID(9390203) # Gilberto Daniella
sm.sendNext("#b友。邦。国。家#k。的事情就是我的事情，这是冒险岛世界的传统。")

sm.setPlayerAsSpeaker() # Has to be Player Avatar
sm.sendNext("嗯……。感谢你的好意，但……")

sm.setSpeakerID(9390203) # Gilberto Daniella
sm.sendNext("爸爸，不……统帅！#h0#……拥有出众的实力。我能保证。他肯定会给我们带来帮助的。让他和我们在一起怎么样？")

sm.setSpeakerID(9390256) # Leon Daniella
sm.sendNext("你认为我们弱到需要借助别人的力量了吗？")

sm.setSpeakerID(9390203) # Gilberto Daniella
sm.sendNext("我不是那个意思……")

sm.setSpeakerID(9390256) # Leon Daniella
sm.sendNext("你快去讨伐阿库旁多那些家伙吧。")

sm.setSpeakerID(9390203) # Gilberto Daniella
sm.sendNext("你是叫#h0#吧…很感谢你的好意，但我不想让外人插手我们共和国的事情。希望你能谅解。")

sm.setSpeakerID(9390256) # Leon Daniella
sm.sendNext("是…我知道了。")

sm.setSpeakerID(9390203) # Gilberto Daniella
sm.sendNext("#h0#? I appreciate the offer, but I don't want outsiders getting involved with our state affairs. I hope you understand.")
sm.startQuest(parentID)
sm.dispose()
