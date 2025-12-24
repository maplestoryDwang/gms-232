# Scallop
# 2302002
# Drops an Air Bubble.

bubble = 2022040

reactor.incHitCount()
reactor.increaseState()

if reactor.getHitCount() >= 4:
	sm.dropItem(bubble, sm.getPosition(objectID).getX(), sm.getPosition(objectID).getY())
	sm.removeReactor()
