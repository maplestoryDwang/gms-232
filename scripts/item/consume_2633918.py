# Magical Scroll - Weapon Coupon
# 2633918
# Produces a Magical Scroll of the player's choice.

admin = 2007

scrollList = [
    {"ItemID": 2046991}, # Magical Scroll - One-Handed Weapon (ATT)
    {"ItemID": 2046992}, # Magical Scroll - One-Handed Weapon (Magic ATT)
    {"ItemID": 2047814}, # Magical Scroll - Two-Handed Weapon (ATT)
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