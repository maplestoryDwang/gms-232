#   [Job Adv] (Lv.60)   Way of the Sniper

blackCharm = 4031059
job = "Sniper"
sm.setSpeakerID(2020010) # Rene

if sm.hasItem(blackCharm, 1):
    sm.sendNext("I am impressed, you surpassed the test. Only few are talented enough.\r\n"
                "You have proven yourself to be worthy, thus I shall mold your body into a #b"+ str(job) + "#k.")
    sm.consumeItem(blackCharm, 1)
    sm.jobAdvance(321) # Sniper
    sm.completeQuestNoRewards(parentID)
    sm.sendSayOkay("You are now a #b"+ str(job) + "#k.")
else:
    sm.sendSayOkay("You have not retrieved the #t"+ str(blackCharm) +"# yet, I will be waiting.")



