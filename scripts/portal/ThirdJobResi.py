# 310050100
item = chr.getEquippedInventory().getItemBySlot(1)
if item is not None:
    if (sm.hasQuest(23033) or sm.hasQuest(23034) or sm.hasQuest(23035) or sm.hasQuest(23164)) and item.getItemId() == 1003134:
        sm.warpInstanceIn(931000200, 1)
        sm.chat("Destroy the Energy Conducting Device!")
    else:
        sm.chat("This seems to be a forbidden area. Better stay away.")
else:
    sm.chat("This seems to be a forbidden area. Better stay away.")
