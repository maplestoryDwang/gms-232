# 23162 - 2nd job advancement Blaster

sm.setSpeakerID(2151000) # Elex
if sm.hasItem(4034787, 1) and chr.getJob() == 3700:
    sm.setJob(3710)
    sm.addSP(5)
    sm.completeQuest(23162)
    sm.sendSayOkay("你拿回了#t4034787#啊，做得好！果然还是比想象中要厉害啊。")
else:
    sm.sendSayOkay("我之所以将这个任务交给你去做是有原因的，不知道你有没有看出来，你经手处理的黑色之翼就是从前欺负你的家伙，是个非常可恶的家伙，通过锻炼，你已经强大到足以轻松对付那种敌人了。能够双管齐下，一并拿下任务和报仇两件事，你的心情肯定很不错吧。")