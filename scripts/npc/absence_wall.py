# Wall
# 2111011
# Home of the Missing Alchemist (261000001)
# Clears [Magatia's Secret] Clue if it is active.

clue = 3311

if sm.hasQuest(clue):
    response = sm.sendAskYesNo("Amidst the throng of spider webs, "
    "there's a wall behind it that seems to have something written on it. "
    "Perhaps you should take a closer look at the wall?")
    if response:
        sm.sendNext("On a wall full of graffiti, "
        "there seems to be a phrase that really stands out above the rest. "
        "#bIt's in a form of a pendant#k... What does that mean?")
        sm.setQRValue(clue, "5", False)
else:
    sm.sendSayOkay("A throng of webs has accumulated around this part of the home.")