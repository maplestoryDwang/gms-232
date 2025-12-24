# 23164 - Blaster 3rd job advancement

sm.setSpeakerID(2151000) # Elex
if chr.getJob() == 3710 and chr.getLevel() >= 60:
    sm.setJob(3711)
    sm.addSP(5)
    sm.completeQuest(23164)
    sm.sendSayOkay("Good job on defeating the conductor device. You have advanced a job level, and I have given you some SP.")
else:
    sm.sendSayOkay("You do not meet the requirements to advance to the third job.")