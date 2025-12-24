# Chest in the  Lord Pirate Party Quest
LORD_PIRATE_GINSENG_JAR = 9300109
LORD_PIRATE_BELLFLOWER = 9300110

LORD_PIRATE_KEY = "davyjohn stage1"

reactor.incHitCount()
if reactor.getHitCount() >= 1:
    i = 1
    while i < 5:
        sm.spawnMob(LORD_PIRATE_GINSENG_JAR, sm.getPosition(objectID).getX(), sm.getPosition(objectID).getY(), False)
        sm.spawnMob(LORD_PIRATE_BELLFLOWER, sm.getPosition(objectID).getX(), sm.getPosition(objectID).getY(), False)
        i += 1
    sm.removeReactor()

    if field.hasProperty(LORD_PIRATE_KEY):
        num = field.getProperty(LORD_PIRATE_KEY)
        field.setProperty(LORD_PIRATE_KEY, num + 1)
    else:
        field.setProperty(LORD_PIRATE_KEY, 1)

    sm.dispose()
