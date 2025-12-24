# Scroll - Accessory Coupon
# 2633919
# Produces a Scroll for Accessory of the player's choice.

admin = 2007

scrollList = [
    {"ItemID": 2047411}, # Scroll - Accessory ATT Boost 100%
    {"ItemID": 2047412}, # Scroll - Accessory M. ATT Boost 100%
]

sm.setSpeakerID(admin)
selString = ["Please select the scroll you'd like to receive. #b\r\n"]
options = sm.selectionString("#L{i}##i{ItemID}# #z{ItemID}##l", scrollList)
selString.append(options)
selection = sm.sendNext(sm.join(selString))
selectedScroll = scrollList[selection]["ItemID"]

if sm.canHold(selectedScroll):
    sm.consumeItem()
    sm.giveItem(selectedScroll)
else:
    sm.sendSayOkay("Please make room in your Use inventory.")