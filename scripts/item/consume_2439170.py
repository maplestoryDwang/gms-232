# Mastery Box
# 2439170
# Produces 500 Spell Traces.
# Mastery Book functionality is unneeded in Swordie's context and given that Mastery Books were also abolished as of KMS 1.2.360.

spellTrace = 4001832

if sm.canHold(spellTrace, 500):
    sm.giveItem(spellTrace, 500)
    sm.consumeItem()
else:
    sm.chat("Please make room in your Etc. inventory.")