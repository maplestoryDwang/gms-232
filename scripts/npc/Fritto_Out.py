from net.swordie.ms.constants import GameConstants
from net.swordie.ms.constants import ItemConstants
from net.swordie.ms.enums import InvType

if sm.getEmptyInventorySlots(InvType.ETC) == 0:
    sm.sendSayOkay("Make some space in your etc inventory please.")
    sm.dispose()

value = chr.getPolloFritto()  # portals succeeded
amount = GameConstants.randomPortalFrittoCoinFormula(value)  # coins obtained based on the formula
coin_id = ItemConstants.SWORDIE_COIN  # Swordie Coin Template Id

sm.sendNext("Great job, that was a lot of fun!")
chr.resetPolloFritto()
sm.sendSayOkay("I will send you back to your previous location.")
if amount > 0:
    sm.giveItem(coin_id, amount)
sm.warp(chr.getPreviousFieldID())
