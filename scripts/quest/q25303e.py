# High Rolling
# 25303
# Gaston (1401000)
# The quest to get lv200 mount for phantom

gaston = 1401000
royce = 20031161

sm.setSpeakerID(gaston)
sm.sendNext(
    "Excellent timing. In celebration of you reaching Lv. 200, I prepared a gift. I hope you like it.")

sm.setPlayerAsSpeaker()
sm.sendNext("#p1401000#! You really are the perfect butler! I was just going to tell you that I want a new car! How did you know?")

sm.setSpeakerID(gaston)
if(sm.sendAskYesNo("Hehehe, I know you better than you think, but I'm glad you like it.\r\nNow then, are you ready for a drive?")):
    sm.giveSkill(royce)
    sm.sendSayOkay("Enjoy your new vehicle. I call it Royce.")
    sm.completeQuest(25303)