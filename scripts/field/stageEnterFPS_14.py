# FPS Game from Floor 14 of Oz Tower
#

from net.swordie.ms.client.character import Gun
from net.swordie.ms.constants import OzConstants

party_size = 1
if chr.getParty() is not None:
    party_size = sm.getPartySize()

instance = chr.getInstance()
if instance is not None:
    if not instance.hasProperty("F14_Inited"):
        instance.addProperty("F14_Inited", True)
        for _ in range(OzConstants.F14_MOBS_SPAWNED * party_size):
            spawn_rect = OzConstants.F14_SPAWN_RECT
            rand_pos = spawn_rect.getRandomPositionInside()
            sm.spawnMob(OzConstants.RED_MUSHROOM_BAT, rand_pos.getX(), rand_pos.getY(), False)
            rand_pos = spawn_rect.getRandomPositionInside()
            sm.spawnMob(OzConstants.RED_MUSHROOM_BAT_2, rand_pos.getX(), rand_pos.getY(), False)
            rand_pos = spawn_rect.getRandomPositionInside()
            sm.spawnMob(OzConstants.YELLOW_MUSHROOM_BAT, rand_pos.getX(), rand_pos.getY(), False)
            rand_pos = spawn_rect.getRandomPositionInside()
            sm.spawnMob(OzConstants.YELLOW_MUSHROOM_BAT_2, rand_pos.getX(), rand_pos.getY(), False)


sm.lockInGameUI(True, False)
sm.hideUser(True)

gun = Gun.getByName("shotgun")
chr.setGun(gun)
gun.updateGunToChar(chr)
gun.updateAmmoToChar(chr)