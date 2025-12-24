# 1413 - [Job Adv] (Lv.30) Way of the Spearman

darkMarble = 4031013
job = "Spearman"
DANCES_WITH_BALROG = 10202
sm.setSpeakerID(DANCES_WITH_BALROG)

sm.setSpeakerID(1022000)
if sm.hasItem(darkMarble, 30):
    sm.sendNext("I am impressed, you surpassed the test. Only few are talented enough.\r\n"
                "You have proven yourself to be worthy, thus I shall mold your body into a #b"+ str(job) + "#k.")
else:
    sm.sendSayOkay("You have not retrieved the #t"+ str(darkMarble)+"#s yet, I will be waiting.")
    sm.dispose()


sm.consumeItem(darkMarble, 30)
sm.jobAdvance(130) # Spearman
sm.completeQuestNoRewards(parentID)
sm.sendNext("You are now a #b"+ str(job) + "#k.")