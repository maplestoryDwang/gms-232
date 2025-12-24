#   [Job Adv] (Lv.30)   Gunslinger of the Seven Seas

darkMarble = 4031013
job = "Gunslinger"
KYRIN = 10204
sm.setSpeakerID(KYRIN)

sm.setSpeakerID(1090000)
if sm.hasItem(darkMarble, 30):
    sm.sendNext("I am impressed, you surpassed the test. Only few are talented enough.\r\n"
                "You have proven yourself to be worthy, I shall mold your body into a #b"+ str(job) + "#k.")
else:
    sm.sendSayOkay("You have not retrieved the #t"+ str(darkMarble)+"#s yet, I will be waiting.")
    sm.dispose()


sm.consumeItem(darkMarble, 30)
sm.jobAdvance(520) # Gunslinger
sm.completeQuestNoRewards(parentID)
sm.sendNext("You are now a #b"+ str(job) + "#k.")
