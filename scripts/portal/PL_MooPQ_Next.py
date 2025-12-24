from net.swordie.ms.world.field.instance.instancehelper.pq import GooExplorationInstanceHelper
instance = chr.getInstance()
if instance is None:
    sm.dispose()

helper = instance.getInstanceHelper()

if sm.getFieldID() == 867155900 and helper.isStage1Finished():
    sm.warp(867156000)
elif sm.getFieldID() == 867156000 and helper.getCurrentStageProgress() >= 3:
    sm.warp(867156100)
elif sm.getFieldID() == 867156100 and helper.getCurrentStageProgress() >= 4:
    sm.warp(867156200)
elif sm.getFieldID() == 867156200 and helper.getCurrentStageProgress() >= 5:
    sm.warp(867156300)
elif sm.getFieldID() == 867156300 and helper.getCurrentStageProgress() >= 6:
    sm.warp(867156400)
