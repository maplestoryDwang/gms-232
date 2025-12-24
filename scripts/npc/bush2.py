# a pile of herbs (1043001) | Forest of Endurance : Stage 5 (910130102)
# Forest of Endurance - The Double-Rooted Reg Ginseng (Quest 2051)
# Author: Tiger

rewards = [
 [4020007, 2], # Diamond Ore
 [4020008, 2], # Black Crystal Ore
 [4010006, 2], # Gold Ore
 [1032013, 1]  # Red Hearted Earrings
 ]

if sm.getFieldID() == 910130102:
    if sm.sendAskYesNo("You have reached the end of this jumpquest! I will send you back now"):
        if sm.hasQuest(9998):
            sm.setQRValue(9998, "ellinia", "1")
        else:
            sm.createQuestWithQRValue(9998, "ellinia=1")
    sm.warp(101000000)


#if sm.hasQuest(2051):
#    response = sm.sendAskYesNo("Are you sure you want to take #bDouble-Rooted Red Ginseng#k with you?")

#    if response:
#         sm.giveItem(4031032, 1) # Double-Rooted Reg Ginseng
#         sm.warp(101000000) # Ellinia
#else:
#    rand = random.choice(rewards)
#    sm.giveItem(rand[0], rand[1])
#    sm.warp(101000000) # Ellinia
