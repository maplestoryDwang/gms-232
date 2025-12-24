from net.swordie.ms.world.field.instance.instancehelper.pq import MoonBunnyInstanceHelper

instance = chr.getInstance()
if instance is None:
    sm.dispose()

helper = instance.getInstanceHelper()
if helper is None:
    sm.dispose()

if instance.isSolo():
    if chr == instance.getChr():
        if helper.hasAllRiceCakes():
            if sm.sendAskYesNo("You have collected all the rice cakes! Would you to complete the Party Quest?"):
                helper.completeMoonBunny()
        else:
            if sm.sendAskYesNo("Would you like to leave the Party Quest? \r\n\r\nYou need to collect #r" + str(MoonBunnyInstanceHelper.RICE_CAKE_REQ) + "#k Rice Cakes to clear the Party Quest."):
                instance.removeCharNoReentrance(chr)

else:
    party = instance.getParty()
    if helper.hasAllRiceCakes():
        if sm.sendAskYesNo("You have collected all the rice cakes! Would you to complete the Party Quest?"):
            helper.completeMoonBunny()
    else:
        sm.sendNext("You need to collect #r" + str(MoonBunnyInstanceHelper.RICE_CAKE_REQ) + "#k Rice Cakes.")
        if sm.sendAskYesNo("Would you like to leave the Party Quest? \r\n\r\nYou need to collect #r" + str(MoonBunnyInstanceHelper.RICE_CAKE_REQ) + "#k Rice Cakes to clear the Party Quest. \r\nIf you have collected all Rice Cakes, please have your party leader speak to me."):
            instance.removeCharNoReentrance(chr)
