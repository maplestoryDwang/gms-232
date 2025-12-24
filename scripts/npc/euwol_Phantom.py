sm.setSpeakerID(2159461) # Treasure Chest
if chr.getJob() == 2410 and chr.getLevel() >= 60:
    sm.jobAdvance(2411)
    sm.completeQuest(25111)
    sm.sendSayOkay("As you find the treasure, you feel yourself getting stronger.")
else:
    sm.sendSayOkay("You do not meet the requirements to advance to the third job.")