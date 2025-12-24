if sm.hasQuestCompleted(34108):
    sm.warp(450001107, 1)
else:
    sm.setPlayerAsSpeaker()
    sm.sendSayOkay("It looks like Kao has something to say, I should talk to him first.")