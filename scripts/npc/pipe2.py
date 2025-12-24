# 2nd Pipe Handle
# 2111018
# Home of the Missing Alchemist (261000001)
# Warps the player into the home's study as the last step of the pipe sequence after inputting 'my love Phyllia' (case-sensitive).

undergroundStudy = 3339

if sm.hasQuest(undergroundStudy) or sm.hasQuestCompleted(undergroundStudy):
    # The dummy quest ID 7063 will be used to determine if the pipes are being activated in the right order
    # This needs to be activated last
    pipeStatus = sm.getQRValue(7063)
    if pipeStatus == "3":
        answer = sm.sendAskText("As the pipe moved downwards, a security device appeared. "
        "A password may need to be entered.", "", 1, 15)
        if answer == "my love Phyllia":
            # Clean up quest 7063 to reset pipe sequence
            sm.deleteQuest(7063)
            sm.teleportToPortal(1)
        else:
            sm.sendSayOkay("The security device rejected the password.")
    else:
        sm.sendSayOkay("The pipe didn't move one bit.")
else:
    sm.sendSayOkay("The pipe didn't move one bit.")