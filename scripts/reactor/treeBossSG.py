# Krexel Spawner
if sm.hasItem(4031942):
    reactor.incHitCount()
    reactor.increaseState()
    if reactor.getHitCount() >= 4:
        sm.spawnMob(9420521, -177, -200, False)
        sm.removeReactor()
else:
    sm.chat("You don't have the mallet required to hit this branch.")