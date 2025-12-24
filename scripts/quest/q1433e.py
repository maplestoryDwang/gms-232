#   [Job Adv] (Lv.60)   Way of the Berserker

blackCharm = 4031059
job = "Berserker"
sm.setSpeakerID(2020008) # Tylus

if sm.hasItem(blackCharm, 1):
    sm.sendNext("I am impressed, you surpassed the test. Only few are talented enough.\r\n"
                "You have proven yourself to be worthy, thus I shall mold your body into a #b"+ str(job) + "#k.")
else:
    sm.sendSayOkay("You have not retrieved the #t"+ str(blackCharm) +"#s yet, I will be waiting.")
    sm.dispose()


sm.consumeItem(blackCharm, 1)
sm.jobAdvance(131) # Crusader
sm.completeQuestNoRewards(parentID)
sm.sendSayOkay("You are now a #b"+ str(job) + "#k.")
