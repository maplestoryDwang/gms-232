#Shinsoo's calling
jobSkills = {
    11: 11121000,
    12: 12121000,
    13: 13121000,
    14: 14121000,
    15: 15121000,
}

sm.setSpeakerID(1064022)
sm.sendNext("I have something to give to you.")
sm.sendNext("This power will help you protect your queen. Now I will leave to seek for a solution. I wish you good luck.")
sm.startQuest(parentID)
sm.completeQuest(parentID)
jobID = chr.getJob()
jobID = jobID / 100

if jobID in jobSkills:
    skill = jobSkills[jobID]
    sm.giveSkill(jobID, 0, 30)