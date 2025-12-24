# Permanent Fireworks Mount
# 2631890
# Grants the Fireworks Mount skill.

mount = 80002936

if sm.hasSkill(mount):
    sm.chat("You already have the 'Fireworks' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Fireworks' mount.")
