from net.swordie.ms.world.field.instance.instancehelper.pq import GooExplorationInstanceHelper
instance = chr.getInstance()
if instance is None:
    sm.dispose()

helper = instance.getInstanceHelper()
guess = helper.getStage1CodeAtIndex(2)
if guess == 2:
    sm.teleportToPortal(5)
    helper.guessStage1Code(chr, 2, guess)
else:
    sm.teleportToPortal(1)