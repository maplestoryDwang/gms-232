# Gets called after spell tracing to reapply Safety/Lucky day scrolls
# Binding "equip" has the current equip
from net.swordie.ms.client.character.items import EquipAttribute
LUCKY_DAY = 2530000

quant = sm.getQuantityOfItem(LUCKY_DAY)
if quant > 0 and not equip.hasAttribute(EquipAttribute.LuckyDay) and sm.sendAskYesNo("Do you want to reapply a #i{}##t{}#? (#b#c{}##k left)".format(LUCKY_DAY, LUCKY_DAY, LUCKY_DAY)):
    if quant > 0:
        equip.addAttribute(EquipAttribute.LuckyDay)
        sm.consumeItem(LUCKY_DAY)
    else:
        sm.sendNext("You don't have any.")

SAFETY_SCROLL_1 = 5064100  # Cash item from the CS
SAFETY_SCROLL_2 = 2532000  # Use item from Ari

chosenScroll = SAFETY_SCROLL_1 if sm.getQuantityOfItem(SAFETY_SCROLL_1) > sm.getQuantityOfItem(SAFETY_SCROLL_2) else SAFETY_SCROLL_2

quant = sm.getQuantityOfItem(chosenScroll)

if quant > 0 and not equip.hasAttribute(EquipAttribute.UpgradeCountProtection) and sm.sendAskYesNo("Do you want to reapply a #i{}##t{}#? (#b#c{}##k left)".format(chosenScroll, chosenScroll, chosenScroll)):
    if quant > 0:
        equip.addAttribute(EquipAttribute.UpgradeCountProtection)
        sm.consumeItem(chosenScroll)
    else:
        sm.sendNext("You don't have any.")

equip.updateToChar(chr)
