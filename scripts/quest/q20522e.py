# Raising Mimiana
# 20522
# Kiridu (1102002)

from net.swordie.ms.enums import InvType
mimiana_egg = 4220137

if not sm.hasItem(mimiana_egg):
    sm.sendNext(
        "The riding for Knights are a bit different from the ride available for regular folks."
        " This takes place through a creature that is of the Mimi race that can be found on this island; they are called #bMimianas#k. Instead of riding monsters, the Knights ride Mimiana. "
        "There's one thing that you should never, ever forget."
    )
    sm.sendNext("Don't think of this as just a form of a mount or transportation. These mounts can be your friend, your comrade, your colleague... all of the above. Even a friend close enough to entrust your life! That's why the Knights of Ereve actually grow their own mounts.")
    if sm.sendAskYesNo("Now, here's a Mimiana egg. Are you ready to raise a Mimiana and have it as your traveling companion for the rest of its life?"):
        if sm.getEmptyInventorySlots(InvType.ETC) == 0:
            sm.sendSayOkay(
                "Please check and see if your Etc. inventory is full or not.")
        else:
            sm.giveItem(mimiana_egg)
            sm.sendSayOkay(
                "Mimiana's egg can be raised by #bsharing your daily experiences with it.#k Once Mimiana fully grows up please come see me.")
elif sm.hasItem(mimiana_egg):
    sm.sendNext("Hey there! How's Mimiana's egg?")
    sm.sendNext("Oh, were you able to awaken Mimiana Egg? That's amazing... Most knights can't even dream of awakening it in such a short amount of time.")
    sm.consumeItem(mimiana_egg)
    sm.completeQuest(20522)
