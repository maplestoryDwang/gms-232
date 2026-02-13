# 23025 - 2nd job advancement Mechanic

sm.setSpeakerID(2151004) # Checky
if sm.hasItem(4032739, 1) and chr.getJob() == 3500:
    sm.setJob(3510)
    sm.addSP(5)
    sm.completeQuest(23025)
    sm.sendSayOkay("这就是那个#t4032737#啊。果然……只要有了这个文件，就可以对反抗者今后的方向作出调整了。干得好。")
else:
    sm.sendSayOkay("这个任务原来不是你的任务，是我特意交给你的。那个黑色之翼成员……你一定很想亲手把他解决掉吧？我是希望你为了复仇，可以把任务完成得更好。")