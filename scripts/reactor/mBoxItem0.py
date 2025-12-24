# Maple Road - Inside the Dangerous Forest/South Perry Reactor

# Reactor Tutorial Maple Island Explorer
DANGEROUS_FOREST = 4000014
FIRST_EXPLORER_GIFT_BOX = 4033915
DESERTED_HOUSE = 800000202

# Maple Island Explorer Storyline
SOUTH_PERRY = 4000030
FLUSTERED_EXPLORER = 32213
BOAT_BOARDING_TICKET = 4033914

KINDLING = 4032980  # Quest Item for Cannoneer Intro

reactor.incHitCount()
if reactor.getHitCount() < 4:
    sm.dispose()
else:
    x, y = sm.getPosition(objectID).getX(), sm.getPosition(objectID).getY()
    if sm.getFieldID() == DANGEROUS_FOREST:
        sm.dropItem(FIRST_EXPLORER_GIFT_BOX, x, y)
    elif sm.getFieldID() == SOUTH_PERRY:
        if sm.hasQuest(FLUSTERED_EXPLORER):
            if not sm.hasItem(BOAT_BOARDING_TICKET):
                sm.dropItem(BOAT_BOARDING_TICKET, x, y)
    elif sm.getFieldID() == DESERTED_HOUSE:
        sm.chat("You broke the box but nothing happened.")
    else:
        sm.dropItem(KINDLING, x, y)
    sm.removeReactor()
