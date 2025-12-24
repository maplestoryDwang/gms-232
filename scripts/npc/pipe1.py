# 1st Pipe Handle
# 2111017
# Home of the Missing Alchemist (261000001)
# Step 1 to warp into the home's study if [Magatia's Secret] Dr. De Lang's Underground Study is active or completed.

undergroundStudy = 3339

if sm.hasQuest(undergroundStudy) or sm.hasQuestCompleted(undergroundStudy):
    # The dummy quest ID 7063 will be used to determine if the pipes are being activated in the right order
    # Since this pipe has to be turned first anyways, just check if the player already started on that
    if not sm.hasQuest(7063):
        sm.createQuestWithQRValue(7063, "1")
        sm.sendNext("The pipe makes a sharp, shrieking metal noise, and turns a little to the right.")
    else:
        sm.sendSayOkay("The pipe didn't move one bit.")
else:
    sm.sendSayOkay("The pipe didn't move one bit.")