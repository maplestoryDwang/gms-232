# Jellyfish Above Surface
# 450016280
# Warps to The Jellyfish [The Final Edge of Light] if player is 240+.

if chr.getLevel() >= 240:
    sm.warp(450016000, 2)
else:
    sm.chat("You must be Level 240 or higher to dive towards Sellas.")
