# Small Airship
# 3003640
# Warp from White Spear Deck 1 to Outpost, or White Spear Deck 3 to Crash Site if player is 250+.

destinationDict = {
    450009100: {"MapID": 450009050}, # White Spear Deck 1 => Outpost
    450009300: {"MapID": 450011120}, # White Spear Deck 3 => Crash Site
}

currentField = sm.getFieldID()

if currentField in destinationDict:
    destination = destinationDict[currentField]

    sm.flipDialoguePlayerAsSpeaker()
    # Quick level check if attempting to travel to Labyrinth of Suffering
    if currentField == 450009300 and chr.getLevel() < 250:
        sm.sendSayOkay("You must be Level 250 or higher to enter the Labyrinth of Suffering.")
        sm.dispose()
    response = sm.sendAskYesNo(sm.formatString("Do you want to go to #b#m{MapID}##k?", destination))
    if response:
        sm.warp(destination["MapID"])
# The airship doesn't go anywhere from White Spear Deck 2
else:
    sm.chat("The fog still rages in this area. Boarding the airship here would be very risky.")