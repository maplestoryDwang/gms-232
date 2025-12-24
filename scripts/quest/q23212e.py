#23212 | Contract with Mastema
sm.setSpeakerID(2450017)

ds = chr.getJob() == 3100
newSec = 1099002 if ds else 1099007
newJob = 3110 if ds else 3120

if sm.sendAskYesNo("Everything is ready. Let us begin the contract ritual. Focus on your mind."):
    sm.giveNewSecondary(newSec)
    sm.setJob(newJob)
    sm.addSP(5)
    sm.completeQuest(parentID)
    sm.setPlayerAsSpeaker()
    sm.sendNext("#b(You feel a curious energy flowing into you.)")
    sm.setSpeakerID(2450017)
    sm.sendNext("There... our contract is made. Now we can communicate through our minds. Isn't that neat?")