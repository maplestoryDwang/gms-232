# Rare Collection [Ming Dynasty Bronze Incense Burner] (62130)

import time

from net.swordie.ms.loaders import ItemData
from net.swordie.ms.util import FileTime

huiKoonKit = 9310537

incenseBurner = 4001859
incenseBurnerTotem = 1202175
yuGardenCoin = 4310177

def generateTotem():
    timedTotem = ItemData.getItemDeepCopy(incenseBurnerTotem)
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
sm.sendNext("I found this #eMing Dynasty Bronze Incense Burner#n while hunting!")

sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(huiKoonKit)
sm.sendNext("If it's what you say it is, you've hit the jackpot! Let me take a look!")
if sm.canHold(incenseBurnerTotem):
    sm.consumeItem(incenseBurner)
    sm.deleteQuest(parentID)
    sm.sendNext("Wait a second... Could this really be...?!")

    sm.setParam(57)
    sm.sendNext("It's real, isn't it? It's a #eBronze Incense Burner from the Ming Dynasty#n, right?!")

    sm.setParam(37)
    sm.setInnerOverrideSpeakerTemplateID(huiKoonKit)
    sm.sendNext("Well, actually, it appears to be an incense burner from a high-class hotel on the Bund. "
    "They use them as decor for their hallways. \r\n"
    "Don't be too sad, though. I'll turn it into something useful.")
    sm.sendNext(''.join(["Here you go! I made it into a ", sm.formatInlineItem(incenseBurnerTotem), "! \r\n"
    "I'll even give it to you at a discount. Just 5x ", sm.formatInlineItem(yuGardenCoin), "s!"]))

    generateTotem()

    sm.setParam(57)
    sm.sendNext("...")

    sm.setParam(37)
    sm.setInnerOverrideSpeakerTemplateID(huiKoonKit)
    sm.sendSayOkay("Ha, kidding, kidding. Now you get back out there, and if you find something rare, you bring it to ME, got it?")
else:
    sm.sendNext("Hm...Can you make some space in your Equip inventory first, just in case?")