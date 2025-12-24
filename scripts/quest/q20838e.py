# 20838 Certified Knight - Cygnus tutorial quest
sm.setSpeakerID(1102007)
sm.sendAskYesNo("Do you have the Proof of Exam items?")
if sm.hasItem(4033670, 3):
    sm.sendNext("Yay! I'm so happy! You're every bit as amazing as I knew you'd be! Here, take this chair. I made it for you! Sit on it when you're tired, and you'll get your HP back faster! I slipped it into your Set-up inventory!")
    sm.completeQuest(parentID)
    sm.giveItem(3010060)
else:
    sm.sendSayOkay("Don't lie to me! I know you haven't gathered 3 Proof of Exams yet!")