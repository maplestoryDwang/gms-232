# 59001 - Crybaby

sm.setSpeakerID(9390305)
sm.sendNext("那个#b#p9390306##k好像在哭，不知道是不是因为我的那个玩笑而哭的？")
sm.setPlayerAsSpeaker()
sm.sendNext("不行!得懂得珍惜朋友啊。赶紧去给#b#p9390306##k道歉吧。")
sm.setSpeakerID(9390305)
if sm.sendAskYesNo("是!珍惜朋友也是成为英雄的条件之一啊!"):
    sm.startQuest(parentID)
    sm.setPlayerAsSpeaker()
    sm.sendNext("You got it! A true hero is excellent at delivering apologies, as you just experienced!")
    sm.dispose()
else:
    sm.dispose()