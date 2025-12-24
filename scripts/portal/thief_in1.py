# Rocky Hill
# 260010401
# Warps to Red Scorpion's Lair after typing in Open Sesame (case insensitive).

voice = 2103008

sm.setSpeakerID(voice)
answer = sm.sendAskText("If you want to open the door, then yell out the magic word...", "", 1, 15)

if answer.lower() == "open sesame":
    sm.warp(260010402)
else:
    sm.sendSayOkay("#b(The door remains closed.)")