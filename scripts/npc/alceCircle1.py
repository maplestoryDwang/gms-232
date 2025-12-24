# 1st Magic Pentagram
# 2111020
# Black Magician's Lab (261040000)
# Step 1 of activating the Black Mage's Pentacle for [Magatia's Secret] The Black Magician's Magic Pentagram.

pentagram = 3345
humility = 4031739

if sm.hasQuest(pentagram) and sm.hasItem(humility):
    stabalize = sm.getQRValue(pentagram)
    if stabalize == "":
        sm.showNpcSpecialActionByTemplateId(parentID, "act33451")
        sm.chat("The first Magic Pentagram has reacted.")
        sm.consumeItem(humility)
        sm.setQRValue(pentagram, "1", False)
    else:
        sm.chat("Nothing happens when you tried to activate the Magic Pentagram.")
else:
    sm.chat("Nothing happens when you tried to activate the Magic Pentagram.")