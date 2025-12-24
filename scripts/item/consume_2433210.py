# Kimono Box
# 2433210
# Produces a *permanent* unisex Cash overall equip at random.

import random

kimonos = [
    1052015, # Blue Shisengumi Uniform
    1052016, # Brown Shisengumi Uniform
    1052024, # Big Kimono
    1052026, # Grey Full Coat
    1052027, # Red Full Coat
    1052028, # Forest Samurai Outfit
    1052049, # Yang In
    1052087, # Dark Blue Kimono
    1052292, # King Crow Suit
    1052435, # Princess Hakama
]

reward = random.choice(kimonos)

if sm.canHold(reward):
    sm.consumeItem()
    sm.giveItem(reward)
else:
    sm.chat("You need an empty slot in your Dec. inventory to use this.")