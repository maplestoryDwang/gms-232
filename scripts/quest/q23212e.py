#23212 | Contract with Mastema
sm.setSpeakerID(2450017)

ds = chr.getJob() == 3100
newSec = 1099002 if ds else 1099007
newJob = 3110 if ds else 3120

if sm.sendAskYesNo("好了，现在开始契约仪式。请尽可能地将精神集中在我身上。"):
    sm.giveNewSecondary(newSec)
    sm.setJob(newJob)
    sm.addSP(5)
    sm.completeQuest(parentID)
    sm.setPlayerAsSpeaker()
    sm.sendNext("#b(好像有一股奇怪的力量渗透到了体内。)#k")
    sm.setSpeakerID(2450017)
    sm.sendNext("你的职业不对无法转职，想正常体验剧情不要乱改职业。")