# Center of the Magic Pentagram
# 2111023
# Black Magician's Lab (261040000)
# Final step to activate the Black Mage's Pentacle for [Magatia's Secret] The Black Magician's Magic Pentagram.

pentagram = 3345

if sm.hasQuest(pentagram):
    stabalize = sm.getQRValue(pentagram)
    if stabalize == "3":
        sm.playSound("Magatia/alceCircle", 100)
        sm.showNpcSpecialActionByTemplateId(parentID, "act33454")
        sm.chat("The Magic Pentagram is starting to light up.")
        sm.setQRValue(pentagram, "4", False)
    else:
        sm.chat("Nothing happens when you tried to activate the Magic Pentagram.")
else:
    sm.chat("Nothing happens when you tried to activate the Magic Pentagram.")