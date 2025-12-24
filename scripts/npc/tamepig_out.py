# Kenta
# 2060005
# Kenta's Breeding Room (923010000)
# The NPC to leave kenta's breeding room, aka the instance for getting lv70 hog mount quest

zoo_map = 230000003
if sm.hasItem(4031508, 5) and sm.hasItem(4031507, 5):
    sm.sendNext("Wow! You've succeeded in collecting 5 of each #bKenta'sReport#k and #bPheromone#k! Good. Now I will send you to #m" +
                str(zoo_map)+"#. Please talk to me when you get there.")
    sm.warpInstanceOut(zoo_map)
else:
    if sm.sendAskYesNo("Do you want to leave?"):
        sm.warpInstanceOut(zoo_map)