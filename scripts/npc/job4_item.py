# Chief Tatamo
# 2081000
# Leafre (240000000)
# Gives Dragon Moss Extract for Towards the Sky 2. Also sells Magic Seeds for 30k meso each.

dragonMossExtract = 4032531
magicSeed = 4031346

selection = sm.sendNext("...Can I help you? #b\r\n\r\n"
"#L0#Find the ingredients for the Flying Potion (Dragon Moss Extract) #l\r\n"
"#L1#Buy the #t" + repr(magicSeed) + "# #l")

if selection == 0:
    if sm.hasQuest(3759) and not sm.hasItem(dragonMossExtract):
        sm.sendNext("So, have you progressed in the investigation of the Dragon Rider?")
        sm.sendSay("What? You met #bMatada#k? Well, well, well. I suppose he's finally returned, after having traveled the world. Not that he's ever done anything for this town, but perhaps he missed his home?")
        sm.setPlayerAsSpeaker()
        sm.sendSay("To pursue the Dragon Rider, you'll have to be able to fly... To do so, you'll need the #bDragon Moss Extract#k.")
        sm.setSpeakerID(parentID)
        sm.sendSay("The Dragon Moss Extract? That's an ingredient used in specialty medicine from the Halfingerers. Sure, I'll give you some if you need it, but are you sure it'll let you fly?")
        sm.setPlayerAsSpeaker()
        sm.sendSay("Yes. Matada said it's a key ingredient to make a potion for flying.")
        sm.setSpeakerID(parentID)
        sm.sendSay("Oh, I see. Alright. I'll give you some, I hope you knock some sense into that Dragon Rider!")
        sm.sendSay("Please keep looking into it, will you?")
        if sm.canHold(dragonMossExtract):
            sm.giveItem(dragonMossExtract)
        else:
            sm.sendSayOkay("Please make some room in your ETC inventory.")
    else:
        sm.sendSayOkay("I'm sorry, I can't give you Dragon Moss Extract at the moment.")

elif selection == 1:
    seedCost = 30000
    seedCap = sm.getMesos() // seedCost
    
    sm.sendNext("You don't seem to be from our town. How can I help you? #b\r\n"
    "#L0# I would like some #z" + repr(magicSeed) + "#.#l")
    if seedCap > 0:
        quantity = sm.sendAskNumber(sm.join(["#b#z", repr(magicSeed), "##k is a precious item; I cannot give it to you just like that.\r\n"
        "How about doing me a little favor? Then I'll give it to you. "
        "I'll sell the #b#z", repr(magicSeed), "##k to you for #b 30,000 mesos#k each.\r\n"
        "Are you willing to make the purchase? How many would you like, then?"]), 1, 1, seedCap)
        response = sm.sendAskYesNo(sm.join(["Buying #b", repr(quantity), " #z", repr(magicSeed), "#(s)#k will cost you #b", repr(seedCost * quantity), " mesos#k. "
        "Are you sure you want to make the purchase?"]))
        if response:
            if sm.canHold(magicSeed):
                sm.deductMesos(seedCost * quantity)
                sm.giveItem(magicSeed, quantity)
                sm.sendNext("See you again.")
            else:
                sm.sendSayOkay("Please make some room in your ETC inventory.")
    else:
        sm.sendSayOkay("Hm...You don't have enough mesos. Speak to me again when you have at least #b 30,000 mesos#k.")
        