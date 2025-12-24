PRIMROSE_SEED = 4001453

if sm.hasItem(PRIMROSE_SEED, 1):
    sm.consumeItem(PRIMROSE_SEED, 1)
    if reactor.getState() == 0:
        reactor.setState(1)
        reactor.broadcastChangeState()

        instance = chr.getInstance()
        if instance is not None:
            helper = instance.getInstanceHelper()
            helper.incSeedsPlanted()
