# Will's Cursed Spellbook Selection Box
# 2633926
# Produces a Cursed Spellbook of the player's choice.

admin = 2007

bookList = [
    {"ItemID": 1162080}, # Cursed Red Spellbook
    {"ItemID": 1162081}, # Cursed Blue Spellbook
    {"ItemID": 1162082}, # Cursed Green Spellbook
    {"ItemID": 1162083}, # Cursed Yellow Spellbook
]

# Spellbook recs could be implemented, but the spellbooks aren't actually class-locked unlike other gear pieces/boxes (see KMS 1.2.352 patch notes for the other boxes in Reboot introduced that patch)
# Recs can also potentially cause more issues regarding Pirates and especially Xenon
sm.setSpeakerID(admin)
selString = ["Please select the spellbook you'd like to receive. #b\r\n"]
options = sm.selectionString("#L{i}##i{ItemID}# #z{ItemID}##l", bookList)
selString.append(options)
selection = sm.sendNext(sm.join(selString))
selectedGear = bookList[selection]["ItemID"]

if sm.canHold(selectedGear):
    sm.consumeItem()
    sm.giveItem(selectedGear)
else:
    sm.sendSayOkay("Please make room in your Equip inventory.")