#   [Job Adv] (Lv.30)   Gunslinger of the Seven Seas

darkMarble = 4031013
job = "Gunslinger"
monster = "OctoPirate"
KYRIN = 10204
sm.setSpeakerID(KYRIN)

sm.setSpeakerID(1090000)
sm.sendNext("你想选择火枪手之路吗？火枪手是用#b短枪#k攻击远处的敌人的远距离职业。使用手枪的各种技能比弓箭更华丽，但是难度也更高。当然，也更好玩。")


sm.sendNext("当然，最重要的是基本技能。#b精准手枪#k和#b速射#k是最最基本的技能。可以让枪变得更强、更快、更准确。")

response = sm.sendAskYesNo("但是真正的乐趣来自于攻击技能。用肉眼几乎看不到的速度向多个敌人快速发射3发子弹的#b快枪手#k、向一个敌人连续发射3发子弹的#b三连射杀#k、向后方紧急回避同时用枪射击的#b激退射杀#k等技能，既很强，又很好玩。")

if response:
    sm.warp(912040000, 0) # Pirate Test Site
    sm.startQuestNoCheck(parentID)
else:
    sm.sendSayOkay("通过可以一瞬间高高跳起的#b轻羽鞋#k跳跃后，持续按住技能键，可以缓慢降落。在降落的时候也可以开枪射击。重要的是要根据情况使用相应的技能。")
