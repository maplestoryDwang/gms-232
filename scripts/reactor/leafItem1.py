# Leafre Tree Fruit [right-facing]
# 2402001
# Drops one of three Fruit buff items.

import random

fruits = [
    2022086, # Red Fruit
    2022087, # Black Fruit
    2022088, # Blue Fruit
]

reactor.incHitCount()
reactor.increaseState()

if reactor.getHitCount() >= 4:
	sm.dropItem(random.choice(fruits), sm.getPosition(objectID).getX(), sm.getPosition(objectID).getY())
	sm.removeReactor()