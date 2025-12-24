# Mu Lung Peach [left-facing]
# 2502000
# Drops a Peach.

peach = 2022116

reactor.incHitCount()
reactor.increaseState()

if reactor.getHitCount() >= 4:
	sm.dropItem(peach, sm.getPosition(objectID).getX(), sm.getPosition(objectID).getY())
	sm.removeReactor()
