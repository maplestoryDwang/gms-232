#Enter Goo Island: Goo Ruins 3rd floor
from net.swordie.ms.world.field.instance.instancehelper.pq import GooExplorationInstanceHelper
from net.swordie.ms.enums import ActionBarType

instance = chr.getInstance()
if instance is None:
    sm.dispose()

helper = instance.getInstanceHelper()

helper.setupStage3()
sm.setActionBar(True, ActionBarType.GooExploration)