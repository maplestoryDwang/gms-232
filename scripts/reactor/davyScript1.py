# To close the door in Lord Pirate PQ
OLD_METAL_KEY = 4001117
hitCount = 0

LORD_PIRATE_KEY = "davyjohn stage4"

reactor.incHitCount()
if reactor.getHitCount() >= 1:
    if sm.hasItem(OLD_METAL_KEY):
        sm.consumeItem(OLD_METAL_KEY)
        sm.removeReactor()

        if field.hasProperty(LORD_PIRATE_KEY):
            num = field.getProperty(LORD_PIRATE_KEY)
            field.setProperty(LORD_PIRATE_KEY, num + 1)
        else:
            field.setProperty(LORD_PIRATE_KEY, 1)