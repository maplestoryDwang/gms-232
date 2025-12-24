# Black Portal
# 2153004
# Hidden Portal (310040110)
# Randomly warps you to one of Victoria Island's main towns, excepting Sleepywood if The Secret Black Wing Portal has been completed.
# Will deduct 10k mesos instead like Karcasa if you're out of Black Wings Tokens.

import random

harryLion = 23944
bwToken = 4032766

victoriaIsland = [
    100000000, # Henesys
    101000000, # Ellinia
    102000000, # Perion
    103000000, # Kerning City
    104000000, # Lith Harbor
    120000000 # Nautilus Harbor
]

def warpToVictoriaIsland():
    destination = random.choice(victoriaIsland)
    sm.warp(destination)

if sm.hasQuestCompleted(harryLion):
    if sm.hasItem(bwToken):
        sm.consumeItem(bwToken)
        warpToVictoriaIsland()
    elif sm.getMesos() >= 10000:
        sm.chat("Consumed 10000 mesos instead of a Black Wings Token to operate the Black Portal.")
        sm.deductMesos(10000)
        warpToVictoriaIsland()
    else:
        sm.chat("You need 10000 mesos to operate the Black Portal without a Black Wings Token.")
else:
    sm.chat("You don't have permission to use the Black Portal.")