# 2nd Magic Pentagram
# 2111021
# Black Magician's Lab (261040000)
# Step 2 of activating the Black Mage's Pentacle for [Magatia's Secret] The Black Magician's Magic Pentagram.

pentagram = 3345
honesty = 4031740

if sm.hasQuest(pentagram) and sm.hasItem(honesty):
    stabalize = sm.getQRValue(pentagram)
    if stabalize == "1":
        sm.showNpcSpecialActionByTemplateId(parentID, "act33452")
        sm.chat("The second Magic Pentagram has reacted.")
        sm.consumeItem(honesty)
        sm.setQRValue(pentagram, "2", False)
    else:
        sm.chat("Nothing happens when you tried to activate the Magic Pentagram.")
else:
    sm.chat("Nothing happens when you tried to activate the Magic Pentagram.")