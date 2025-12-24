#   [Job Adv] (Lv.60)   Way of the Crusader

blackCharm = 4031059
job = "Crusader"
sm.setSpeakerID(2020008) # Tylus

sm.setSpeakerID(2020008)
if sm.hasItem(blackCharm, 1):
    sm.sendNext("I am impressed, you surpassed the test. Only few are talented enough.\r\n"
                "You have proven yourself to be worthy, thus I shall mold your body into a #b"+ str(job) + "#k.")
else:
    sm.sendSayOkay("You have not retrieved the #t"+ str(blackCharm) +"# yet, I will be waiting.")
    sm.dispose()


sm.consumeItem(blackCharm, 1)
sm.jobAdvance(111) # Crusader
sm.completeQuestNoRewards(parentID)
sm.sendSayOkay("You are now a #b"+ str(job) + "#k.")