# One Who Fights the Darkness
# 2540006
# Undersea Tower of Oz : Undersea 38F (992038000)
#
from net.swordie.ms.client.partyquests.towerofoz import OzTowerModule
from net.swordie.ms.constants import OzConstants

sm.sendNext("You must help out clearing the darkness!")
instance = chr.getInstance()
if instance is not None:
    cur_mob = instance.getProperty(OzConstants.F38_CUR_MOB)
    if cur_mob is None:
        cur_mob = OzTowerModule.selectRandomF38Mob(instance)
        instance.addProperty(OzConstants.F38_CUR_MOB, cur_mob)

    if cur_mob == OzConstants.PEACH_MONKEY:
        sm.sendNext("Those darn Peach Monkeys have been producing some dark energy. Eliminate them!")
    elif cur_mob == OzConstants.GRIZZLY:
        sm.sendNext("I'm sensing a lot of dark energy from those Grizzlys. Eliminate them!")
    elif cur_mob == OzConstants.PANDA:
        sm.sendNext("I believe those Pandas are involved with the dark energy. Eliminate them!")
