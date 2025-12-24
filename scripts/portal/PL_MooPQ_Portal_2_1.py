from net.swordie.ms.world.field.instance.instancehelper.pq import GooExplorationInstanceHelper
instance = chr.getInstance()
if instance is None:
    sm.dispose()

helper = instance.getInstanceHelper()
guess = helper.getStage1CodeAtIndex(0)
if guess == 1:
    sm.teleportToPortal(3)
    helper.guessStage1Code(chr, 0, guess)
else:
    sm.teleportToPortal(1)
