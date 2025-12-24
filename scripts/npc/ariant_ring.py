# Queen's Cabinet
# 2103002
# King's Room (260000303)
# Produces a Queen's Ring for A Request from a Member of the Sand Bandits?! 3.

redScorpionsThree = 3923
queensRing = 4031578

if sm.hasQuest(redScorpionsThree):
    if sm.canHold(queensRing) and not sm.hasItem(queensRing):
        sm.giveItem(queensRing)
        sm.sendSayOkay("You carefully opened the chest and took out a ring. "
        "You better get out of here now...")
    elif sm.hasItem(queensRing):
        sm.sendSayOkay("You already got a ring. Stealing any more might not be wise...")
    else:
        sm.sendSayOkay("Please make room in your Etc. inventory.")
else:
    sm.sendSayOkay("Stealing from the cabinet will alert the palace guards. Best to leave it alone...")