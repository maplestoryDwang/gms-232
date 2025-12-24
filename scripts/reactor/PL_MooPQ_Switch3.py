#Goo Island stage 3 Switch
from net.swordie.ms.world.field.instance.instancehelper.pq import GooExplorationInstanceHelper
instance = chr.getInstance()
if instance is None:
    sm.dispose()

helper = instance.getInstanceHelper()
if helper.OnStage3ReactorPressed(chr, reactor.getTemplateId()):
    reactor.setState(1)
    reactor.broadcastChangeState()