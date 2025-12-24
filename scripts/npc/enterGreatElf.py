# Elf's Harp
# 1033211
# King's Seat (101050010)
# Warps Mercedes to Advent of the Great Spirit.

from net.swordie.ms.constants import JobConstants

if JobConstants.isMercedes(chr.getJob()):
    sm.warpInstanceIn(910150100, False)
else:
    sm.chat("You tried to play the Elf's Harp, but nothing happens.")