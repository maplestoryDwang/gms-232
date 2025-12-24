# Ellinia Alphine Plant
# 1000023
# Close to the Wind (101020000)
# Drops a Ellivera Fruit for Wing the Fairy's Request 1

elliveraFruit = 4033004

reactor.incHitCount()
reactor.increaseState()

if reactor.getHitCount() >= 3:
	sm.dropItem(elliveraFruit, sm.getPosition(objectID).getX(), sm.getPosition(objectID).getY())
	sm.removeReactor()
