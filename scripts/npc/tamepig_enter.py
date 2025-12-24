# Kenta
# 2060005
# Zoo (230000003)
# This is when you select "I want to learn monster riding from Kenta" for the hog mount quest.

monster_riding_quest = 6002
pheromone_quest = 6003

if sm.hasQuest(monster_riding_quest):
    sm.warpInstanceIn(923010000, False)
    sm.setInstanceTime(5*60)
    sm.chatBlue("Please protect the pig from the aliens!")
elif sm.hasQuestCompleted(pheromone_quest):
    sm.sendNext("I'll send you to the Tamable Hog's area.")
    sm.warp(922200000)
else:
    sm.sendSayOkay("Hiya, I'm a jellyfish and I like to breed animals.")
