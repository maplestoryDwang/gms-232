# 25825 - [Job Advancement] Agent of Justige (AB 2nd job adv)

ESKALADE_NPC_ID = 3000018

if chr.getLevel() >= 30 and chr.getJob() == 6500:
    sm.setSpeakerID(ESKALADE_NPC_ID)
    sm.sendNext("#h0#，你变强了好多呢。")
else:
    sm.dispose()

sm.setSpeakerID(ESKALADE_NPC_ID)
sm.setPlayerAsSpeaker()
sm.sendNext("是吗？？嘿嘿嘿，说实话我也有这种感觉。这下子才觉得有点像正义英雄了。")
sm.sendNext("你可能不知道，随着你不断进行训练，我们的契约关系也在逐渐加深。")
sm.setPlayerAsSpeaker()
sm.sendNext("呃，这个是好事还是坏事呢。")
sm.sendNext("怎么会是坏事？总而言之，现在得提高你我灵魂的默契。")
sm.setPlayerAsSpeaker()
sm.sendNext("好难理解……什么意思啊？")
sm.sendNext("简单来说，就是让你能更好地使用我的力量。")
sm.setPlayerAsSpeaker()
sm.sendNext("哦，那是好事情呢。")
response = sm.sendAskYesNo("那么赶快提高你我之间的默契吧。")
if response:
    sm.jobAdvance(6510)
    sm.dispose()
    sm.completeQuest(25825)
    sm.giveNewSecondary(1352602) # secondary
    chr.setSpToCurrentJob(5)
    sm.sendNext("来！集中精神！")
else:
    sm.sendSayOkay("What happened to wanting more power?")