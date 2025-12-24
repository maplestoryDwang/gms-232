# Mu Lung Peach [right-facing]
# 2502001
# Drops a Peach.

peach = 2022116

reactor.incHitCount()
reactor.increaseState()

if reactor.getHitCount() >= 4:
	sm.dropItem(peach, sm.getPosition(objectID).getX(), sm.getPosition(objectID).getY())
	sm.removeReactor()
