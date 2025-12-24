# Permanent Meteor Roller Mount Coupon
# 2631990
# Grants the Meteor Roller Mount skill.

mount = 80012012

if sm.hasSkill(mount):
    sm.chat("You already have the 'Meteor Roller' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Meteor Roller' mount.")
