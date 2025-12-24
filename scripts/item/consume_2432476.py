#Floor 18 Tower of Oz Coconut
from net.swordie.ms.client.partyquests.towerofoz import OzTowerModule
from net.swordie.ms.connection.packet import UserPacket
from net.swordie.ms.constants import OzConstants

sm.consumeItem()
instance = chr.getInstance()
if instance is not None:
    coco_count = int(instance.getProperty(OzConstants.F18_COCONUT_GATHERED))
    coco_count += 1
    instance.addProperty(OzConstants.F18_COCONUT_GATHERED, coco_count)

    if not OzTowerModule.hasClearedThisFloor(instance, chr.getFieldID()):
        msg = "Coconuts gathered: {}/{}".format(coco_count, OzConstants.COCONUT_REQ)
        instance.broadcast(UserPacket.scriptProgressMessage(msg))

    if coco_count >= OzConstants.COCONUT_REQ:
        OzTowerModule.clearStage(instance, chr)
