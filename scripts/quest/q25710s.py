# q25710s - Kaiser 2nd job advancement

if chr.getJob() == 6100:
    sm.jobAdvance(6110)
    sm.completeQuest(25710)
else:
    sm.sendSayOkay("You're currently not a first job Kaiser.")