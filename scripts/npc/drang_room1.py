# Parwen
# 2111006
# Authorized Personnel Only (261020401)
# Warps to Dran's Lab to let the player talk to Dr. De Lang again for [Magatia's Secret] What Parwen Knows, Dr. De Lang, the Missing Alchemist; What De Lang Wants, and De Lang's Potion.
# This NPC script should only be used if you managed to leave that map to prevent from bricking the questline at those specific quests because the player can't talk to Dr. De Lang again.

parwenKnows = 3320
deLangPotion = 3354

dranLab = {"MapID": 926120200}

if sm.hasQuest(parwenKnows):
    response = sm.sendAskYesNo(sm.formatString("Are you ready to visit #m{MapID}#?", dranLab))
    if response:
        sm.warpInstanceIn(dranLab["MapID"], 0)
else:
    if sm.hasQuest(deLangPotion) or sm.hasQuestCompleted(deLangPotion):
        sm.sendSayOkay("You really don't need to see that alchemist again, do you?")
    else:
        sm.sendSayOkay("You're not ready for this yet.")