# The treasure box in the yakuza boss room
# 8001000
# Nightmare's End (801040100)
# Consumes a Yakuza Underboss's Comb(ID 4000138) to summon yakuza bodyguard


drop = sm.getDropInRect(4000138, 400,)
if drop is not None:
    field.removeDrop(drop.getObjectId(), 0, False, -1)
    sm.spawnMob(9400112,False)