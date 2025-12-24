#Enter Goo Island: Goo Ruins 5th floor
from net.swordie.ms.world.field.instance.instancehelper.pq import GooExplorationInstanceHelper
from net.swordie.ms.enums import ActionBarType

instance = chr.getInstance()
if instance is None:
    sm.dispose()

helper = instance.getInstanceHelper()
helper.spawnStage5Boss(chr.getField())
sm.setActionBar(True, ActionBarType.GooExploration)