# # #
# Invoked when Voyage Mob dies
#

from net.swordie.ms.client.character.commerce.voyage import Voyage


# OnHordeEliminated
if sm.getAmountOfMobsInField() <= 0:
    Voyage.finishHorde(chr)