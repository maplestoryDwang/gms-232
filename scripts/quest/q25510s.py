# The Middle Road - Luminous 2nd job adv
sm.setSpeakerID(1032209)
sm.sendNext("Luminous! Snap out of it, will you? I'll resonate with the power of Light and draw the Dark out of you. Maybe then you'll come to your senses.")
sm.setPlayerAsSpeaker()
sm.sendNext("(Vieren's voice seems to be claming me. Peculiar.)")
sm.sendNext("The Dark no longer clouds my mind. You have my thanks.")
sm.setSpeakerID(1032209)
sm.sendNext("It was nothing. All I did was help you find the strength to control your Dark. Here, this Aurora Prism will let you come and go as you please.")
if sm.canHold(2430874) and chr.getLevel() >= 30 and chr.getJob() == 2700:
    sm.setJob(2710)
    sm.addSP(3)
    sm.giveItem(2430874)
    sm.startQuest(parentID)
    sm.completeQuest(parentID)
else:
    sm.sendNext("Please make room in your USE inventory. I can't give you the Aurora Prism if you don't have space for it in your USE inventory.")