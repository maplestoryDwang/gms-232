# 23024 - 2nd job advancement Wild Hunter

sm.setSpeakerID(2151002) # Belle
if sm.hasItem(4032738, 1) and chr.getJob() == 3300:
    sm.setJob(3310)
    sm.addSP(5)
    sm.completeQuest(23024)
    sm.sendSayOkay("这就是#t4032737#啊？哈哈哈！我的眼光果然没错！我知道你一定可以做到！")
else:
    sm.sendSayOkay("这个任务是我特意从其他人那里抢过来交给你的。黑色之翼的那个家伙，从前让你吃过苦头，不是吗？我把任务交给你，就是想让你向他复仇。执行任务的同时还能复仇，这就是所谓的一石二鸟，不是吗？")