# Carson
# 2111000
# Zenumist Society (261000010) 
# Warps to Closed Lab for [Magatia's Secret] Carson's Experiment.

experiment = 3310
closedLab = 926120100

if sm.hasQuest(experiment):
    control = sm.sendAskYesNo("Do you want to go to the closed laboratory and try controlling the Homun?")
    if control:
        sm.sendNext("Concentrate...! It won't be an easy task trying to control the Magic Pentragram that triggers Homun's rage.")
        sm.warpInstanceIn(closedLab, False)
        sm.setInstanceTime(20 * 60)
else:
    sm.sendSayOkay("Alchemy and its alchemists are important. However, to have the town of Magatia bear this burden... "
    "Magatia's integrity must be preserved. Do you have the power to protect the town of alchemists?")