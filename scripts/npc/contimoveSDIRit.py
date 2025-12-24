# Olaf
# 1002101
# Lith Harbor (104000000)
# Warps Explorers to Southperry Port.

from net.swordie.ms.constants import JobConstants

def isAdventurer(adv):
    result = (adv == 0
    or JobConstants.isAdventurerWarrior(adv)
    or JobConstants.isAdventurerMage(adv)
    or JobConstants.isAdventurerArcher(adv)
    or JobConstants.isAdventurerThief(adv)
    or JobConstants.isAdventurerPirate(adv))
    return result

# Check character's job category
adv = chr.getJob()

if isAdventurer(adv):
    response = sm.sendAskYesNo("Would you like to go back to #bMaple Island#k?")
    if response:
        sm.warp(2000100) # Move to Southperry Port
else:
    sm.sendSayOkay("Sorry, only Explorers can go to #bMaple Island#k.")