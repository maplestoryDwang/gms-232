from net.swordie.ms.world.field.instance.instancehelper.pq import GooExplorationInstanceHelper
instance = chr.getInstance()
if instance is None:
    sm.dispose()

helper = instance.getInstanceHelper()
guess = helper.getStage1CodeAtIndex(6)
if guess == 1:
    sm.teleportToPortal(9)
    helper.guessStage1Code(chr, 6, guess)
else:
    sm.teleportToPortal(1)