if sm.hasQuest(34119):
    sm.setPlayerAsSpeaker()
    sm.sendSayOkay("I can't go in here yet, I should go to the bottom portal and defeat Arma.")
elif sm.hasQuestCompleted(34119):
    sm.warp(450001230, 1)
