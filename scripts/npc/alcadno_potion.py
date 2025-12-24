# Russellon's Desk
# 2111015
# Lab - Area B-1 (261020200)
# Produces Russellon's Pill if [Magatia's Secret] Life Alchemy, and the Missing Alchemist is active.

lifeAlchemyMissing = 3314
russellonPill = 2438888

if sm.hasQuest(lifeAlchemyMissing):
    if sm.canHold(russellonPill) and not sm.hasItem(russellonPill):
        sm.giveItem(russellonPill)
        sm.sendSayOkay("There seems to be a number of small pills on the desk. "
        "Just take one from there...")
    elif sm.hasItem(russellonPill):
        sm.sendSayOkay("You already have a pill. Use it and return to Russellon.")
    else:
        sm.sendSayOkay("Please make room in your Use inventory.")