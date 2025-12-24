#   [Job Adv] (Lv.50)   Becoming a Blade Specialist
sm.setSpeakerID(1056000)
if sm.hasQuest(parentID):
    if sm.canHold(1052244):
        sm.giveItem(1052244)
        sm.jobAdvance(431)
        sm.completeQuest(parentID)
        sm.addSP(15)  # additional SP, allowing DBs to max out their skills
    else:
        sm.sendSay("Empty one or more Equip slots before you can advance to Blade Acolyte.")