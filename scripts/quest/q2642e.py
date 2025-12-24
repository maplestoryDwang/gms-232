#   [Job Adv] (Lv.30)   Becoming a Blade Acolyte
sm.setSpeakerID(1056000)
if sm.hasQuest(parentID):
    if sm.canHold(1132021):
        sm.giveItem(1132021)
        sm.jobAdvance(432)
        sm.completeQuest(parentID)
        sm.addSP(5)  # additional SP, allowing DBs to max out their skills
    else:
        sm.sendSay("Empty one or more Equip slots before you can advance to Blade Acolyte.")