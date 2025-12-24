# Permanent Snowflake Wings Mount Coupon
# 2631561
# Grants the Snowflake Wings Mount skill.

mount = 80002882

if sm.hasSkill(mount):
    sm.chat("You already have the 'Snowflake Wings' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Snowflake Wings' mount.")
