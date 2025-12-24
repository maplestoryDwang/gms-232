# Permanent Arpeggio Mount Coupon
# 2439808
# Grants the Arpeggio Mount skill.

mount = 80002655

if sm.hasSkill(mount):
    sm.chat("You already have the 'Arpeggio' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Arpeggio' mount.")
