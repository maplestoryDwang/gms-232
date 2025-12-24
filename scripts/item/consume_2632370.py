# Permanent Ice Skating Mount
# 2632370
# Grants the Ice Skating Mount skill.

mount = 80012063

if sm.hasSkill(mount):
    sm.chat("You already have the 'Ice Skating' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Ice Skating' mount.")
