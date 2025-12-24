# Permanent Ice Carriage Mount Coupon
# 2630913
# Grants the Ice Carriage Mount skill.

mount = 80002843

if sm.hasSkill(mount):
    sm.chat("You already have the 'Ice Carriage' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Ice Carriage' mount.")
