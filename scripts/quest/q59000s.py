# 59000 - The Town Prankster

sm.setSpeakerID(9390304)
sm.sendNext("那是你做的吧?\r\n这会让#b#p9390305##k很为难的。")
sm.sendNext("赶紧过去和#b#p9390305##k道歉吧。")
if sm.sendAskYesNo("知错能改,也是作为英雄的一个条件哦。"):
    sm.startQuest(parentID)
    sm.setPlayerAsSpeaker()
    sm.sendNext("英雄的条件!\r\n是!那我赶紧回去道歉。")
    sm.dispose()
else:
    sm.dispose()