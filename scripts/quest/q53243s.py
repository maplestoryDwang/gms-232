# Jett 4th job adv
sm.setSpeakerID(2111007)
if sm.sendAskYesNo("I gave the alchemy book to #p2111008# and asked him to begin work on the device. Unfortunately, I am too well known among those halls to deliver the supplies myself. Would you be willing to go in my stead?"):
    sm.startQuest(parentID)
    sm.sendSayOkay("Take these materials and get back to him quickly. #p2111008# is in the #b#m261010000#")
