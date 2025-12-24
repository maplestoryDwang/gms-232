# Permanent Wind Spirit Mount Coupon
# 2436716
# Grants the Wind Spirit Mount skill.

mount = 80002272

if sm.hasSkill(mount):
    sm.chat("You already have the 'Wind Spirit' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Wind Spirit' mount.")
