# [Pet Box] Blackheart
# 2430690
# Produces a Blackheart or Black-hearted Earrings of the player's choice. No RNG since they're not Petite Luna and there's no normally available useful pet equip scrolls (yet).

medina = 2183001

prizes = [
    {"ItemID": 5000217}, # Blackheart
    {"ItemID": 1802354}, # Black-hearted Earrings
]

sm.setSpeakerID(medina)
selString = ["Would you like Hilla's beloved Blackheart, or earrings for the pet? #b\r\n"]
options = sm.selectionString("#L{i}##i{ItemID}# #z{ItemID}##l", prizes)
selString.append(options)
selection = sm.sendNext(sm.join(selString))
selectedReward = prizes[selection]["ItemID"]

if sm.canHold(selectedReward):
    sm.consumeItem()
    sm.giveItem(selectedReward)
else:
    sm.sendSayOkay("Please check if you have room in your Equip and Cash inventories.")