# Fiona
# 9201095
# Dead Man's Gorge (610010004)
# Crafts pieces of the Masteria's Legacy set for 100 Shadowknight Coins and 500m per craft.

legacy = [
    {"ItemID": 1132313, "Slot": "Belt"}, # Delgrund's Honor
    {"ItemID": 1113305, "Slot": "Ring"}, # Glona's Heart
    {"ItemID": 1122438, "Slot": "Pendant"}, # Legacy of Light
    {"ItemID": 1122439, "Slot": "Pendant"}, # Legacy of Darkness
    {"ItemID": 1032314, "Slot": "Earrings"}, # Numenal's Willpower
    {"ItemID": 1202281, "Slot": "Totem"}, # Lireni's Wish
]

shadowknight = 4310279

sm.sendNext("Do you require my services? #b\r\n"
"#L0# So you mentioned you dabble in crafting... #l\r\n")

selString = ["You have some coins I can work with? Excellent, here are the things I can make so far... "
"what would you like me to create? #r#e\r\n"
"For production, you need #t", repr(shadowknight), "# x100 and 500,000,000 mesos. #b#n\r\n"]
items = sm.selectionString("#L{i}##i{ItemID}# #z{ItemID}# ({Slot})#l", legacy)
selString.append(items)
itemSelection = sm.sendNext(sm.join(selString))

selectedItem = legacy[itemSelection]["ItemID"]
confirmCraft = sm.sendAskYesNo(sm.join(["Are you sure you want me to make #b ", sm.formatInlineItem(selectedItem), "#k?"]))
if confirmCraft:
    if sm.hasItem(shadowknight, 100) and sm.getMesos() >= 500000000:
        sm.sendNext("Good, please hand over the items I asked for. Excellent. "
        "Now give me some space and I'll begin my work..")
        if sm.canHold(selectedItem):
            sm.consumeItem(shadowknight, 100)
            sm.deductMesos(500000000)
            sm.giveItem(selectedItem)
            sm.sendNext("There she is. Treat her well.")
        else:
            sm.sendSayOkay("Hey, make some space in your Equip inventory. I don't want to see this piece of work go to waste.")
    else:
        sm.sendSayOkay("Come back when you have enough Shadowknight Coins and mesos. This isn't charity work, you know.")
else:
    sm.sendSayOkay("Talk to me again if you change your mind later.")