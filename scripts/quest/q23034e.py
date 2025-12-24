# 23034 - Wild Hunter 3rd job advancement

sm.setSpeakerID(2151002) # Belle
if chr.getJob() == 3310 and chr.getLevel() >= 60:
    sm.setJob(3311)
    sm.addSP(5)
    sm.completeQuest(23034)
    sm.sendSayOkay("Good job on defeating the conductor device. You have advanced a job level, and I have given you some SP.")
else:
    sm.sendSayOkay("You do not meet the requirements to advance to the third job.")