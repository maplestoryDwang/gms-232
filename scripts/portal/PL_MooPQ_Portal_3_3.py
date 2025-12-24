from net.swordie.ms.world.field.instance.instancehelper.pq import GooExplorationInstanceHelper
instance = chr.getInstance()
if instance is None:
    sm.dispose()

helper = instance.getInstanceHelper()
guess = helper.getStage1CodeAtIndex(1)
if guess == 3:
    sm.teleportToPortal(4)
    helper.guessStage1Code(chr, 1, guess)
else:
    sm.teleportToPortal(1)