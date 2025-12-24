# Permanent Capybara Mount Coupon
# 2437273
# Grants the Capybara Mount skill.

mount = 80011501

if sm.hasSkill(mount):
    sm.chat("You already have the 'Capybara' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Capybara' mount.")
