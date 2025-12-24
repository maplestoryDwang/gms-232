#Von Leon escape key chest
KEY = 4032860
reactor.incHitCount()
if reactor.getHitCount() >= 4:
    sm.dropItem(KEY, sm.getPosition(objectID).getX(), sm.getPosition(objectID).getY())
    sm.removeReactor()