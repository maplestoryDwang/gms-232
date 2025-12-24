# Chest in the Lord Pirate PQ
LORD_PIRATE_ENRAGED_KRU = 9300115
LORD_PIRATE_ENRAGED_CAPTAIN = 9300116

LORD_PIRATE_KEY = "davyjohn stage3"

reactor.incHitCount()
if reactor.getHitCount() >= 1:
    i = 1
    while i < 5:
        sm.spawnMob(LORD_PIRATE_ENRAGED_KRU, sm.getPosition(objectID).getX(), sm.getPosition(objectID).getY(), False)
        sm.spawnMob(LORD_PIRATE_ENRAGED_CAPTAIN, sm.getPosition(objectID).getX(), sm.getPosition(objectID).getY(), False)
        i += 1
    sm.removeReactor()
    if field.hasProperty(LORD_PIRATE_KEY):
        num = field.getProperty(LORD_PIRATE_KEY)
        field.setProperty(LORD_PIRATE_KEY, num + 1)
    else:
        field.setProperty(LORD_PIRATE_KEY, 1)

    sm.dispose()
