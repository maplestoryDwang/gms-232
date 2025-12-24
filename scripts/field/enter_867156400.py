#Enter Goo Island: Goo Ruins Reward stage
from net.swordie.ms.world.field.instance.instancehelper.pq import GooExplorationInstanceHelper
from net.swordie.ms.enums import ActionBarType

instance = chr.getInstance()
if instance is None:
    sm.dispose()

helper = instance.getInstanceHelper()
helper.spawnLootChests()

sm.setActionBar(False, ActionBarType.GooExploration)