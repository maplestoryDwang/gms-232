# Scarecrow Summoning Sack (2434325) | Used to spawn a Dojo Dummy on Client's position
from net.swordie.ms.constants import GameConstants
from net.swordie.ms.loaders import MobData
from net.swordie.ms.util import Util

def spawnMob(hp, level, pdr):
    mob = MobData.getMobDeepCopyById(STRAW_DUMMY_ID)
    forcedStat = mob.getForcedMobStat()
    forcedStat.setLevel(level)
    forcedStat.setPdr(pdr)
    forcedStat.setMdr(pdr)
    pos = chr.getPosition()
    mob.setPosition(pos.deepCopy())
    mob.setPrevPos(pos.deepCopy())
    mob.setPosition(pos.deepCopy())
    mob.setNotRespawnable(True)
    mob.setHp(hp)
    mob.setMaxHp(hp)
    if mob.getField() is None:
        mob.setField(field)

    fh = field.findFootHoldBelow(pos)
    mob.setCurFoodhold(fh)
    mob.setHomeFoothold(fh)
    field.spawnLife(mob, None)

STRAW_DUMMY_ID = 9305655
DURATION = GameConstants.DOJO_DUMMY_DURATION * 60 * 1000

feild = sm.getChr().getField()

if not field.getInfo().isTown():
    sm.chat("You can only spawn a dummy in a Town Map")

elif sm.hasMobsInField():
    sm.chat("You cannot spawn a dummy whilst there are other monsters or dummies in the map")

else:
    hpStr = sm.sendAskText("How much HP should the dummy have?", "", 1, 15)
    if not Util.isLong(hpStr):
        sm.sendSayOkay("That is not a valid hp value.")
    else:
        hp = abs(long(hpStr))
        level = abs(sm.sendAskNumber("What should the dummy's level be?", 0, 0, 999))
        pdr = abs(sm.sendAskNumber("How much Physical/Magical Defense Rate should the mob have?", 0, 0, 9999))
        spawnMob(hp, level, pdr)
        sm.invokeAfterDelay(DURATION, "removeMobByTemplateId", STRAW_DUMMY_ID)
        sm.chatBlue("The Training Dummy will be removed after {} minutes.".format(GameConstants.DOJO_DUMMY_DURATION))
        sm.consumeItem()