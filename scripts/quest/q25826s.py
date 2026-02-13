# 25825 - [Job Advancement] Agent of Justige (AB 2nd job adv)

ESKALADE_NPC_ID = 3000132

if chr.getLevel() >= 60 and chr.getJob() == 6510:
    sm.setPlayerAsSpeaker()
    sm.sendNext("#p3000018#，最近我使用技能时，粉红色光芒似乎更强烈了呢。")
else:
    sm.dispose()

sm.setSpeakerID(ESKALADE_NPC_ID)
sm.sendNext("那是当然。我激活这股力量时，它就变成了我最喜欢的颜色。这种现象说明你已经逐渐能熟练运用我的力量了。")

sm.setPlayerAsSpeaker()
sm.sendNext("粉红色没什么不好……可这似乎有点太粉了吧。")

sm.setSpeakerID(ESKALADE_NPC_ID)
sm.sendNext("那就放弃咯，放弃的话就没烦恼了。")

sm.setPlayerAsSpeaker()
sm.sendNext("没办法吗？")

sm.setSpeakerID(ESKALADE_NPC_ID)
sm.sendNext("先不说这个，看来你已经能感觉到自己越来越能得心应手地控制这股力量。是时候再次提升你能力值的极限了。")

sm.setPlayerAsSpeaker()
sm.sendNext("你说的是之前提过的灵魂的默契吗？")

sm.setSpeakerID(ESKALADE_NPC_ID)
sm.sendNext("对，怎么样？你会成为真正的粉色天使。")

sm.setPlayerAsSpeaker()
sm.sendNext("这个嘛，我怎么想都觉得不太好额……")

sm.setSpeakerID(ESKALADE_NPC_ID)
response = sm.sendAskYesNo("你应该摒弃偏见。一句话，你想变强吧？")
if response:
    sm.setPlayerAsSpeaker()
    sm.jobAdvance(6511)
    sm.giveNewSecondary(1352603)
    sm.sendNext("哇啊！我好像变强了呢！")

