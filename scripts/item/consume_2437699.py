# St. Bernard Mount (Permanent)
# 2437699
# Grants the St. Bernard Mount skill.

mount = 80011525

if sm.hasSkill(mount):
    sm.chat("You already have the 'St. Bernard' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'St. Bernard' mount.")
