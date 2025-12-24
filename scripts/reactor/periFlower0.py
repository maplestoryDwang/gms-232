# Fire Flower
# 1000025
# North Rocky Mountain: Dusty Wind Hill 
# Drops an Fire Flower for The Perion Homestyle Cooking

quest = 2084
fireFlower= 4033051

if sm.hasQuest(quest):
    sm.dropItem(fireFlower, sm.getPosition(objectID).getX(), sm.getPosition(objectID).getY())
sm.removeReactor()
