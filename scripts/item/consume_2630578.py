# Permanent Giant Yeti Mount Coupon
# 2630578
# Grants the Giant Yeti Mount skill.

mount = 80011826

if sm.hasSkill(mount):
    sm.chat("You already have the 'Giant Yeti' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Giant Yeti' mount.")
