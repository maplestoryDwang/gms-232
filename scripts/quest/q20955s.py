#Shinsoo's calling
jobSkills = {
    11: 11121000,
    12: 12121000,
    13: 13121000,
    14: 14121000,
    15: 15121000,
}

sm.setSpeakerID(1064022)
sm.sendNext("我忘了有东西要给你了。")
sm.sendNext("这份力量会帮助你守护女皇。我要去寻找方法了。愿好运与你同在。")
sm.startQuest(parentID)
sm.completeQuest(parentID)
jobID = chr.getJob()
jobID = jobID / 100

if jobID in jobSkills:
    skill = jobSkills[jobID]
    sm.giveSkill(jobID, 0, 30)