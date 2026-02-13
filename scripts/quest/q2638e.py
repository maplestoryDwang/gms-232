#   [Job Adv] (Lv.50)   Becoming a Blade Specialist
sm.setSpeakerID(1056000)
if sm.hasQuest(parentID):
    if sm.canHold(1052244):
        sm.giveItem(1052244)
        sm.jobAdvance(431)
        sm.completeQuest(parentID)
        sm.addSP(15)  # additional SP, allowing DBs to max out their skills
    else:
        sm.sendSay("双刀客不只要看到敌人，还得是拥有可以保护他人的能力的双刀继承人，才能学习。")