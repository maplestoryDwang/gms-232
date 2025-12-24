# Empty Box
# 2002016
# Treasure Room of Queen (926000010)
# Decoy box for Eleska's Test.

reactor.incHitCount()
reactor.increaseState()

if reactor.getHitCount() >= 4:
	sm.removeReactor()
