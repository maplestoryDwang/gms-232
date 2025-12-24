# Deep Sea Treasure Chest
# 2302001
# Drops Sea Dust for Carta's Demand.

carta = 3076
seaDust = 4031251

reactor.incHitCount()
reactor.increaseState()

if reactor.getHitCount() >= 4:
	if sm.hasQuest(carta):
	    sm.dropItem(seaDust, sm.getPosition(objectID).getX(), sm.getPosition(objectID).getY())
	sm.removeReactor()
