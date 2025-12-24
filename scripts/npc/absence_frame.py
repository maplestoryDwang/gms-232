# Picture Frame
# 2111013
# Home of the Missing Alchemist (261000001)
# Produces a Silver Pendant for [Magatia's Secret] Phyllia's Pendant.

silverPendant = 4031697
phylliaPendant = 3322

if sm.hasQuest(phylliaPendant):
    if sm.canHold(silverPendant) and not sm.hasItem(silverPendant):
        sm.giveItem(silverPendant)
        sm.sendSayOkay("The hook behind the frame was unhooked, revealing a secret space within the frame. "
        "There inside, a silver pendant was found. "
        "After carefully removing the pendant, the frame was closed and placed back on the table.")
    elif sm.hasItem(silverPendant):
        sm.sendSayOkay("There's nothing behind the frame anymore.")
    else:
        sm.sendNext("Unable to take what's inside the frame because your Etc. inventory is full.")
else:
    sm.sendSayOkay("A picture frame of a gentlemanly alchemist. Is he the missing alchemist?")