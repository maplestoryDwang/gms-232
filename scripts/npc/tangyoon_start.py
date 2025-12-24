# Tangyoon (1092000) | PQ site
sm.setSpeakerID(1092000)
selection = sm.sendNext("#e<Party Quest: Cooking with Tangyoon> #n \r\n Do you want to make some delicious dishes for the crew of the Nautilus? I can teach you how. \r\n\r\n #b"
            "#L0# Start Cooking with Tangyoon.#l \r\n "
            "#L1# Get Tangyoon's Chef Outfit.#l \r\n"
            "#L2# Listen to the explanation about Cooking with Tangyoon.#l \r\n"
            "#L3# View remaining attempts for today.")

#Warp to pq lobby/inside PQ
if selection == 0:
    if sm.getFieldID() == 912080000:
        if not sm.isPartyLeader() or sm.getPartySize() > 3:
            sm.sendNext("You know what they say about too many cooks. If you'd like to enter, then you need to be in a party of 3 or less. Just have your Party Leader enter fro you. You can even come by yourself.")
        else:
            #TODO add proper entering
            sm.warpPartyIn(912080100)
    else:
        sm.sendNext("Cooking is not easy. But if you're still up for it then follow me.")
        sm.warp(912080000, 0)


#Item Shop
elif selection == 1:
    selection = sm.sendNext("A Chef Outfit? Only the most talented cooks can get those. \r\n"
                            "#L10# Give me a Chef Outfit(2 or more Chef Certificates)#l\r\n"
                            "#L11#Give me a Chef Hat (3 or more Chef Certificates)#l")
    if selection == 10:
        if sm.hasItem(4033668, 2) and sm.canHold(1052578):
            sm.consumeItem(4033668, 2)
            sm.giveItem(1052578)
        else:
            sm.sendNext("Are you sure you have 2 Chef certificates? If not, make sure your Equip tab is not full. And don't try to trick me! I can smell deceit.")
    if selection == 11:
        if sm.hasItem(4033668, 3) and sm.canHold(1003762):
            sm.consumeItem(4033668, 3)
            sm.giveItem(1003762)
    else:
        sm.sendNext("Are you sure you have 3 Chef certificates? If not, make sure your Equip tab is not full. And don't try to trick me! I can smell deceit.")

#Explanation
elif selection == 2:
    sm.sendNext("Welcome to the Nautilus, the finest pirate ship in Maple World! I'm Tangyoon, the head chef in charge of the galley! Everyone knows I'm the boss around here, whipping up dishes of aggressively good grub.")
    sm.sendNext("But even a great chef like me has trouble keeping up with these pirates! I've never seen such scurvy souls eat so much. I'm starting to think I need assistants.")
    sm.sendNext("And that's where you come in. I can teach you to cook if you're strong enough for it. See, you have to beat the ingredients into submission to cook them. You also have to salt and roast them just right, but we can get to that later.")
    sm.sendNext("If your food is good, you'll be hailed as a hero. If it isn't though... Well, pirates express themselves through violence, y'know. But I think you can handle it. Want to give it a try? You can try up to 5 times a day. \r\n"
                "#e-Level#n: 60 or above #r(Recommended Level: 60-90)#k\r\n"
                "#e-Time Limit#n: 20 minutes \r\n"
                "#e-Players#n: 1-3 \r\n"
                "#e-Rewards#n: \r\n"
                "#v1052578# Tangyoon's Chef Outfit \r\n"
                "#v1003762# Tangyoon's Chef Hat")
#Remaining attempts:
#TODO add proper remaining attempts
sm.sendNext("You have X attempts left today.")