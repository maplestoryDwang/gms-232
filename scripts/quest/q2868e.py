# A Ghost's Perspective
# 2868
# Jane Doe (1052133)

janeDoe = 1052133
shade = 5090000
naoraHospital = 103000004

sm.setPlayerAsSpeaker()
sm.sendNext("Did you find anything?")

sm.setSpeakerID(janeDoe)
sm.sendNext("I didn't find any ghosts of the hat's owner..."
"but it was dropped by one of the #o" + repr(shade) + "#s here.")

sm.setPlayerAsSpeaker()
sm.sendNext("(What exactly happened to the hat's owner down here? "
"Maybe we should return to the hospital for now...)")
sm.completeQuest(parentID)
sm.warp(naoraHospital)