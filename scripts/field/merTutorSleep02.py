# Fairy Forest : King's Seat

if chr.getJob() == 2002:
    sm.completeQuest(24005) # Cursed Slumber
    sm.setJob(2300) # Mercedes
    sm.addSP(5)
    sm.setSTR(4)
    sm.setINT(4)
    sm.setDEX(4)
    sm.setLUK(4)
    sm.setAP(4 + chr.getLevel() * 5)
    sm.addMaxHP(350)
    sm.addMaxMP(200)
    sm.giveSkill(20021166, 0) # Remove the Beginner Stunning Strike Skill
