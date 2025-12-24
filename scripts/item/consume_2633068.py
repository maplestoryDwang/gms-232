# New Hero Feather Selection Coupon
# 2633068
# Produces a permanent New Hero Feather (cash Hat equip) chosen by the player.

admin = 2007
shadeFeather = 1005739

feathers = []

# Starting from Shade's feather, append Phantom, Lumi, Merc, Aran, and Evan's feathers into the list in that order via looping
for i in range (0, 6):
    hat = shadeFeather + i
    feathers.append({"ItemID": hat})

sm.setSpeakerID(admin)
selString = ["Please select the New Hero Feather you'd like to receive. #b\r\n"]
options = sm.selectionString("#L{i}##i{ItemID}# #z{ItemID}##l", feathers)
selString.append(options)
selection = sm.sendNext(sm.join(selString))
selectedFeather = feathers[selection]["ItemID"]

if sm.canHold(selectedFeather):
    sm.consumeItem()
    sm.giveItem(selectedFeather)
else:
    sm.sendSayOkay("Please check if you have room in your Dec. inventory.")