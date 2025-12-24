# Marimba Lagoon
# 450005300
# Warps to Cavernous Cavern if [Arcana] Under the Lagoon is active or cleared.

if sm.hasQuest(34472) or sm.hasQuestCompleted(34472):
    sm.warp(450005400, 1)
else:
    sm.chat("The boulder is blocking your way.")
    sm.teleportToPortal(1)