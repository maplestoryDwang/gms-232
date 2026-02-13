# [Commerci Republic] A Chat with Gilberto

COMMERCI_BOOTS = 1072874

sm.setSpeakerID(9390256) # Leon Daniella
sm.sendNext("长时间在外面进行贸易，还是在家好啊。还有，刚刚的事，谢了。")

sm.setPlayerAsSpeaker() # Has to be Player Avatar
sm.sendNext("说什么谢不谢的。那又没什么。实际上，你也展现了你那优秀的用兵方法。以后不要犯同样的错误就行了。吃一堑长一智嘛。")

sm.setSpeakerID(9390256) # Leon Daniella
sm.sendNext("嗯！！没错！！以后我得小心了。")

sm.setPlayerAsSpeaker() # Has to be Player Avatar
sm.sendNext("更何况，如果说得到了不明身份的女人的帮助的话……")

sm.setSpeakerID(9390256) # Leon Daniella
sm.sendNext("嗯…… 如果接受了不认识的人的帮助，按我爸爸的性格，他应该是不会开心的。总之，今天你也辛苦了，好好休息吧。")

if sm.canHold(COMMERCI_BOOTS):
    sm.sendNext("给，收下这个吧。是你帮助我的谢礼。")
    sm.giveItem(COMMERCI_BOOTS)
    sm.completeQuest(parentID)
else:
    sm.sendNext("I was going to give you some fancy boots, but I see you're carrying to much..\r\n"
                "Why don't you drop some of your garbage?")
sm.dispose()
