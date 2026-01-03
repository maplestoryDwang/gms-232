# Maple Admin's Heartfelt Gift
# Get All Box
from net.swordie.ms.enums import InvType

box = 2436226
item_ids = [1102170, 1142073, 1072535] # Welcome Cape, Be My Friend, Beach Sandal

if sm.hasItem(box) and sm.getEmptyInventorySlots(InvType.EQUIP) >= len(item_ids):
    sm.consumeItem(box)
    for item_id in item_ids:
        sm.giveItem(item_id)
    sm.setSpeakerID(9201238)
    sm.sendSayOkay("Got" + "".join("\r\n#i{0}# #z{0}#".format(item_id) for item_id in item_ids))
