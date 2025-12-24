# Magpie Nest-egg
# 2436610
# Grants the Magpie Nest-egg Mount skill.

mount = 80002265

if sm.hasSkill(mount):
    sm.chat("You already have the 'Magpie Nest-egg' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Magpie Nest-egg' mount.")
