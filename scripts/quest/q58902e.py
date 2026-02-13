# Regards, Takeda Shingen Questline | Near Momiji Hills 1 (811000001)
# Completes Quest 58902

TAKEDA = 9000427 # Takeda Shingen
ITEMID = 4034126 # 100 Spells for the Serious Soldier

if "3" in sm.getQRValue(58901): # Regards, Takeda Shingen
    sm.setSpeakerID(TAKEDA)

    sm.flipSpeaker()
    sm.sendNext("你比我想象中还要快啊。谢谢你。")

    sm.flipSpeaker()
    sm.sendSay("我来看一看，有没有能解除咒术的方法。你就待会再来吧。")


    sm.completeQuest(parentID) # Regards, Takeda Shingen
    sm.completeQuest(parentID) # Regards, Takeda Shingen
    itemQty = sm.getQuantityOfItem(ITEMID) # TODO: This for some reason doesn't remove all quantites of the item.
    sm.consumeItem(ITEMID, itemQty)
