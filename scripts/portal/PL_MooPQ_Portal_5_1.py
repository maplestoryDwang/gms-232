from net.swordie.ms.world.field.instance.instancehelper.pq import GooExplorationInstanceHelper
instance = chr.getInstance()
if instance is None:
    sm.dispose()

helper = instance.getInstanceHelper()
guess = helper.getStage1CodeAtIndex(3)
if guess == 1:
    sm.teleportToPortal(6)
    helper.guessStage1Code(chr, 3, guess)
else:
    sm.teleportToPortal(1)