# [Shaolin Temple] Intercepted Messages

ELDER_JUNG = 9310049
WISE_CHIEF_PRIEST = 9310053

sm.removeEscapeButton()
sm.setSpeakerID(ELDER_JUNG)
sm.setBoxChat()
sm.sendNext("哦，谢谢你能这么快就赶来。看来你已经不记得嵩山镇了吧……真是不知道外面的世界发生了怎样的变化。这里还是没变，一草一木，都还是原来的样子。")

sm.sendNext("但是，最近村子里开始流传一些不祥的传闻。说什么有鬼怪出现，偷走了童鞋，这不是童话里才有的故事吗？")

sm.sendNext("我一开始也不相信……但是，我在树林里亲眼看见了披头散发的九尾狐。")

sm.sendNext("我们不能就这么束手待毙，所以我给保护嵩山镇的嵩山少林寺送了几次信，但都被盗贼中途抢走了，这可怎么办？")

response = sm.sendAskYesNo("我希望你能帮我从盗贼手里抢回书信，交给我的老友--#r嵩山少林寺的方丈大师#k。这样的话，我们应该就能知道如何应对现在这个情况了。你能帮帮我们吗？")

if response:
    sm.sendNext("谢谢你，希望你回来的时候能带来好消息。")
    sm.startQuest(parentID)