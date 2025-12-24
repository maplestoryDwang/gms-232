# 23616 - Identity Crisis - Xenon 4th job adv
MEDAL = 1142578
ROO_D = 2300000

sm.setSpeakerID(ROO_D)
if chr.getJob() == 3611 and chr.getLevel() >= 100:

    sm.sendNext("Why the serious face? Wait, you always look serious. Why the more-serious face?")

    sm.setPlayerAsSpeaker()
    sm.sendNext("#bRoo-D#k, what if I never get my memories back? What if I threw away my whole life for something I'll never see?")

    sm.resetParam()
    sm.setSpeakerID(ROO_D)
    sm.sendNext("What? That's crazy! If you had stayed in that lab, #bGelimer#k would have you... stomping on puppies or something! "
                "What if he'd ordered you to destroy Edelstein?! That could have been you!")

    sm.setPlayerAsSpeaker()
    sm.sendNext("I know that, I don't regret leaving. But I feel an emptiness inside that I do not know how to deal with. "
                "You and Beryl do not seem to care about your past at all. Why does it trouble me so much? Am I... broken?")

    sm.resetParam()
    sm.setSpeakerID(ROO_D)
    sm.sendNext("No! You're great, just the way you are. There's nothing wrong with wanting to know who you are, #h #, "
                "but you and I are different, you know? Not everybody wants the same thing.")

    sm.setPlayerAsSpeaker()
    sm.sendNext("....")

    sm.resetParam()
    sm.setSpeakerID(ROO_D)
    sm.sendNext("You taught me that Xenoroids are different. You and Beryl couldn't be less alike. That means we were "
                "meant to have different personalities. If anything, you wanting to find your memories makes you MORE "
                "human than the rest of us.")
    sm.sendNext("I know you're struggling. This isn't gonna be easy for you. It could take years. But if it's something "
                "you want, I know you'll make the decision to persue it, no matter how much pain it comes with. And that "
                "decision will always be yours to make. You're free now.")
    sm.sendNext("Everybody can see that you're dong the right thing. That's why we all help you. It's not because they "
                "feel sorry for you, it's because they believe it's the right thing to do. Don't ever forget the friends "
                "you've found. You might have been enemies if you hadn't left the lab.")

    if sm.canHold(MEDAL):
        sm.setJob(3612)
        sm.addAP(5)
        sm.addSP(5)
        sm.addMaxHP(150)
        sm.addMaxMP(150)
        sm.completeQuest(parentID)
        sm.setPlayerAsSpeaker()
        sm.completeQuest(parentID)
        sm.sendNext("Thank you for standing beside me, Roo-D. I hope that the choices I make will help you as much as they help me.")
        sm.resetParam()
        sm.setSpeakerID(ROO_D)
        sm.sendNext("Don't mention it! I owe you a lot more than you owe me.")
    else:
        sm.sendSayOkay("Please make some space in your EQUIP tab for your medal.")
else:
    sm.sendNext("You look like a suspicious person.")












