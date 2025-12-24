# 3rd Magic Pentagram
# 2111022
# Black Magician's Lab (261040000)
# Step 3 of activating the Black Mage's Pentacle for [Magatia's Secret] The Black Magician's Magic Pentagram.

pentagram = 3345
trust = 4031741

if sm.hasQuest(pentagram) and sm.hasItem(trust):
    stabalize = sm.getQRValue(pentagram)
    if stabalize == "2":
        sm.showNpcSpecialActionByTemplateId(parentID, "act33453")
        sm.chat("The third Magic Pentagram has reacted.")
        sm.consumeItem(trust)
        sm.setQRValue(pentagram, "3", False)
    else:
        sm.chat("Nothing happens when you tried to activate the Magic Pentagram.")
else:
    sm.chat("Nothing happens when you tried to activate the Magic Pentagram.")