# Permanent Cruising with Cloudie Mount Coupon
# 2630324
# Grants the Cruising with Cloudie Mount skill.

mount = 80011791

if sm.hasSkill(mount):
    sm.chat("You already have the 'Cruising with Cloudie' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Cruising with Cloudie' mount.")
