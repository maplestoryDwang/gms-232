from net.swordie.ms.world.field.instance.instancehelper.pq import GooExplorationInstanceHelper
instance = chr.getInstance()
if instance is None:
    sm.dispose()

helper = instance.getInstanceHelper()
newState = reactor.getState() + 1 if reactor.getState() < 8 else 0
reactor.setState(newState)
reactor.broadcastChangeState()
helper.onStateChanged(chr, 2, newState)