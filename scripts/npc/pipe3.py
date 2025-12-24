# 3rd Pipe Handle
# 2111019
# Home of the Missing Alchemist (261000001)
# Step 2 of the pipe sequence to warp into the home's study.

undergroundStudy = 3339

if sm.hasQuest(undergroundStudy) or sm.hasQuestCompleted(undergroundStudy):
    # The dummy quest ID 7063 will be used to determine if the pipes are being activated in the right order
    # This needs to be activated after the first pipe
    pipeStatus = sm.getQRValue(7063)
    if pipeStatus == "1":
        sm.setQRValue(7063, "3", False)
        sm.sendNext("The pipe makes a sharp, shrieking metal noise, and turns a little to the left.")
    else:
        sm.sendSayOkay("The pipe didn't move one bit.")
else:
    sm.sendSayOkay("The pipe didn't move one bit.")