# Permanent Tireless Elf Mount Coupon
# 2437520
# Grants the Tireless Elf Mount skill.

mount = 80011507

if sm.hasSkill(mount):
    sm.chat("You already have the 'Tireless Elf' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Tireless Elf' mount.")
