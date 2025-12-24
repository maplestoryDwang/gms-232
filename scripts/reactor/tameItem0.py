# Kenta's Report box
# 2302005
# Kenta's Breeding Room (923010000)

monster_riding_quest = 6002
kenta_report = 4031508

reactor.incHitCount()
reactor.increaseState()

if reactor.getHitCount() >= 4:
    if sm.hasQuest(monster_riding_quest):
        sm.dropItem(kenta_report, sm.getPosition(
            objectID).getX(), sm.getPosition(objectID).getY())
    sm.removeReactor()
