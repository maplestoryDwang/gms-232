# Jett 4th job adv
sm.setSpeakerID(1094000)
if sm.sendAskYesNo("Batton the hatches! We got a letter for you on the Nautilus!"):
    if sm.canHold(2430752):
        sm.startQuest(parentID)
        sm.sendSayOkay("There's no return address on the envelope and I couldn't make heads or tails of who... I mean, what does it say?")
    else:
        sm.sendNext("You don't have enough USE inventory space to receive the letter.")