# Rare Collection [Tang Dynasty Horseback Riding Doll] (62128)

import time

from net.swordie.ms.loaders import ItemData
from net.swordie.ms.util import FileTime

huiKoonKit = 9310537

horsebackDoll = 4001857
horsebackTotem = 1202173
yuGardenCoin = 4310177

def generateTotem():
    timedTotem = ItemData.getItemDeepCopy(horsebackTotem)
    # Expires in 30 days from now
    timedTotem.setDateExpire(FileTime.fromEpochMillis(int(time.time()*1000) + 86400000*30))

    chr.addItemToInventory(timedTotem)

sm.removeEscapeButton()
sm.setSpeakerType(3)
sm.setColor(1)
sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(huiKoonKit)
sm.sendNext("What are you looking at? You want to buy something?")

sm.setParam(57)
sm.sendNext("I found this #eTang Dynasty Horseback Riding Doll#n while hunting!")

sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(huiKoonKit)
sm.sendNext("If it's what you say it is, you've hit the jackpot! Let me take a look!")
if sm.canHold(horsebackTotem):
    sm.consumeItem(horsebackDoll)
    sm.deleteQuest(parentID)
    sm.sendNext("Wait a second... Could this really be...?!")

    sm.setParam(57)
    sm.sendNext("It's real, isn't it? It's really a #eHorseback Riding Doll from the Tang Dynasty#n, right?!")

    sm.setParam(37)
    sm.setInnerOverrideSpeakerTemplateID(huiKoonKit)
    sm.sendNext("I'm pretty sure they sell these knockoffs at the museum gift shop. \r\n"
    "You did try really hard, so I'll make it into something useful.")
    sm.sendNext(''.join(["Here you go. It's a ", sm.formatInlineItem(horsebackTotem), "! \r\n"
    "I'll even give it to you at a discount. Just 5x ", sm.formatInlineItem(yuGardenCoin), "s!"]))

    generateTotem()

    sm.setParam(57)
    sm.sendNext("...")

    sm.setParam(37)
    sm.setInnerOverrideSpeakerTemplateID(huiKoonKit)
    sm.sendSayOkay("Ha, kidding, kidding. Now you get back out there, and if you find something rare, you bring it to ME, got it?")
else:
    sm.sendNext("Hm...Can you make some space in your Equip inventory first, just in case?")