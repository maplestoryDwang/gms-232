# Rare Collection [Qing Dynasty Jade Kettle] (62129)

import time

from net.swordie.ms.loaders import ItemData
from net.swordie.ms.util import FileTime

huiKoonKit = 9310537

jadeKettle = 4001858
kettleTotem = 1202174
yuGardenCoin = 4310177

def generateTotem():
    timedTotem = ItemData.getItemDeepCopy(kettleTotem)
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
sm.sendNext("I picked up this #eQing Dynasty Jade Kettle#n while hunting!")

sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(huiKoonKit)
sm.sendNext("If it's what you say it is, you've hit the jackpot! Let me take a look!")
if sm.canHold(kettleTotem):
    sm.consumeItem(jadeKettle)
    sm.deleteQuest(parentID)
    sm.sendNext("Wait a second... Could this really be...?!")

    sm.setParam(57)
    sm.sendNext("It's authentic, isn't it? It's a #eJade Kettle from the great Qing Empire#n, right?!")

    sm.setParam(37)
    sm.setInnerOverrideSpeakerTemplateID(huiKoonKit)
    sm.sendNext("I think this is a knockoff kettle from the traditional eatery on Nanjing Road. "
    "Don't feel too bad. That place is delicious. And I'll make it into something useful...")
    sm.sendNext(''.join(["Here you go. I made it into a ", sm.formatInlineItem(kettleTotem), "! \r\n"
    "I'll even give it to you at a discount. Just 5x ", sm.formatInlineItem(yuGardenCoin), "s!"]))

    generateTotem()

    sm.setParam(57)
    sm.sendNext("...")

    sm.setParam(37)
    sm.setInnerOverrideSpeakerTemplateID(huiKoonKit)
    sm.sendSayOkay("Ha, kidding, kidding. Now you get back out there, and if you find something rare, you bring it to ME, got it?")
else:
    sm.sendNext("Hm...Can you make some space in your Equip inventory first, just in case?")