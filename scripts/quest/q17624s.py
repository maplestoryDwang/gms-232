# [Commerci Republic] Fish out of Water

sm.setSpeakerID(9390256) # Leon Daniella
sm.sendNext("#b(他们表情怎么都那样)#k\r\n早上好，莱文。早上好，吉尔伯特。")

sm.setPlayerAsSpeaker() # Has to be Player Avatar
sm.sendNext("啊！#h0#，你起来啦。")

sm.setSpeakerID(9390256) # Leon Daniella
sm.sendNext("#b(问问他是不是发生了什么事情好吧？)\r\n#k你睡得好吗，莱文？出了什么事情吗？吉尔伯特和你的表情都不太好。")

sm.setPlayerAsSpeaker() # Has to be Player Avatar
sm.sendNext("其实……发生了一件比较麻烦的事情……虽然和你没什么关系……")

sm.setSpeakerID(9390256) # Leon Daniella
sm.sendNext("麻烦的事情？")

sm.setPlayerAsSpeaker() # Has to be Player Avatar
sm.sendNext("也不是什么大事。这是我们凯梅尔兹人自己要解决的问题。")

sm.setSpeakerID(9390203) # Gilberto Daniella
sm.sendNext("如果可以的话，我想听听事情的详情。")

sm.sendNext("你听说过叫做#b阿库旁多#k的种族吗？他们是栖息在桑凯梅尔兹运河底下的种族。特别是最近，因为和这些人之间的势力冲突，凯梅尔兹正觉得头疼呢。")

sm.sendNext("#b(阿库旁多……似乎没听说过啊。总之，他们似乎因为这个问题很头疼。这说不定是个获得吉尔伯特信任的机会，再听听详细情况吧。)#k")

sm.sendNext("#b(Delfino? I don't think they're in Maple World, but either way they seem to be causing trouble. "
            "This might be my chance to earn Gilberto's trust, so I should inquire")
sm.startQuest(parentID)
sm.completeQuest(parentID)
sm.dispose()
