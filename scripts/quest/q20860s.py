# The Five Paths - Cygnus 1st job advancement

sm.setSpeakerID(1101002)
sm.sendNext("I'm shocked. You actually possessed the perseverance to make it to level 10. As a matter of course, I'm promoting you to Knight-In-Training, but first tell me, which knight's path do you intend to take?")
sm.sendNext("There are 5 different paths. I don't believe in second chances, so once you pick, I won't allow you to change your mind.")
sm.sendNext("This is a significant decision. Take time to think it over.")
if sm.sendAskAccept("My chief knights are over to the left. Speak to them to learn more about each path."):
    sm.startQuest(parentID)