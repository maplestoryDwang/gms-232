# Broken Box Piece
# 2432468
# Tower Of Oz. Exchange 10 Broken Box Pieces for 1 Hidden Ring Box

from net.swordie.ms.constants import ItemConstants

hidden_ring_box = ItemConstants.HIDDEN_RING_BOX
if sm.hasItem(parentID, 10) and sm.canHold(hidden_ring_box, 1):
    sm.consumeItem(parentID, 10)
    sm.giveItem(hidden_ring_box, 1)
else:
    chr.chatMessage("You either do not have enough box pieces or you do not have enough inventory space")
