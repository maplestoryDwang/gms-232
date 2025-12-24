# Whirlin' Pete Mount
# 2435442
# Grants the Whirlin' Pete Mount skill.

mount = 80001990

if sm.hasSkill(mount):
    sm.chat("You already have the 'Whirlin' Pete' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Whirlin' Pete' mount.")
