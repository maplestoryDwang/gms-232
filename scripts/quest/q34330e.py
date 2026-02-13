# id 34330 ([Lachelein] Nightmare Clocktower 4F), field 450003530
sm.setSpeakerType(3)
sm.setParam(4)
sm.setInnerOverrideSpeakerTemplateID(3003209) # Gray Mask
sm.sendNext("嗯…梦境正在减弱。")
sm.sendSay("你先收下这个吧。说不定我什么时候就会重新变为清道夫了。")
sm.sendSay("这是我变为清道夫时发现的，我一直把它带在身上。看来那时我还保留了意识。不知道它能不能帮到你。")
sm.sendSay("话说，防毒面具最终还是没有来，看来他受到的冲击很大。")
sm.sendSay("不过，你不要太担心。他肯定会恢复的。")
sm.sendSay("我不阻拦你，#ho#，希望你能赢。为了你，还有，为了我们。")
sm.setSpeakerType(4)
sm.setSpeakerID(3003210) # Gray Mask
sm.setParam(2)
sm.sendSay("我要击退路西德。")
sm.setSpeakerType(3)
sm.setParam(4)
sm.sendSay("I won't stand in your way then. Win, #h0#. Both for yourself, and for us.")
if sm.canHold(1712003):
    sm.giveItem(1712003)
    sm.completeQuest(34330)
    sm.startQuest(34331)
    sm.completeQuestNoCheck(34331)
    sm.sendSay("#rDue to Swordie custom changes you don't need to Kill Easy Lucid, you can continue with Arcana once you reach level 225.")
else:
    sm.sendNext("Please make room in your EQUIP inventory. I have something very important to give you.")
