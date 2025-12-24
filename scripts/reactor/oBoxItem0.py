# Orbis Box
# 2002000
# Orbis (200000000)
# Drops an Empty Potion Bottle for Helping Kriel Out.

helpKriel = 3043
emptyBottle = 4031198

reactor.incHitCount()
reactor.increaseState()

if reactor.getHitCount() >= 4:
	if sm.hasQuest(helpKriel):
	    sm.dropItem(emptyBottle, sm.getPosition(objectID).getX(), sm.getPosition(objectID).getY())
	sm.removeReactor()
