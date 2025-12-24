#   [Job Adv] (Lv.60)   Way of the Hermit

blackCharm = 4031059
job = "Hermit"
sm.setSpeakerID(2020011) # Arec

if sm.hasItem(blackCharm, 1):
    sm.sendNext("I am impressed, you surpassed the test. Only few are talented enough.\r\n"
                "You have proven yourself to be worthy, thus I shall mold your body into a #b"+ str(job) + "#k.")
    sm.consumeItem(blackCharm, 1)
    sm.jobAdvance(411) # Hermit
    sm.completeQuestNoRewards(parentID)
    sm.sendSayOkay("You are now a #b"+ str(job) + "#k.")
else:
    sm.sendSayOkay("You have not retrieved the #t"+ str(blackCharm) +"# yet, I will be waiting.")


