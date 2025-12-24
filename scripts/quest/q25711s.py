# q25711s - Kaiser 3rd job advancement

if chr.getJob() == 6110:
    sm.jobAdvance(6111)
    sm.completeQuest(25711)
else:
    sm.sendSayOkay("You're currently not a second job Kaiser.")
