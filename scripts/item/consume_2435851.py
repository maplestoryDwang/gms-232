# Pearl Maple Armor Set Box
# Get All Box
from net.swordie.ms.enums import InvType
box = 2435851
item_ids = [1003864, 1012377, 1052613, 1102563, 1122253, 1132229]

if sm.hasItem(box) and sm.getEmptyInventorySlots(InvType.EQUIP) >= len(item_ids):
    sm.consumeItem(box)
    for item_id in item_ids:
        sm.giveItem(item_id)
    sm.setSpeakerID(9201238)
    sm.sendSayOkay("Got" + "".join("\r\n#i{0}# #z{0}#".format(item_id) for item_id in item_ids))
