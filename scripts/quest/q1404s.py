sm.setSpeakerID(1052001)
sm.sendNext("麦加说的那个人就是你？#h0#……嗯，据她说，你是个很有天赋的小孩……喂，你想成为飞侠吗？你知道飞侠吗？")
sm.sendSay("有些人觉得飞侠是些偷偷摸摸的小偷，但其实不是这样的。冒险岛世界的飞侠是在黑暗中用锋利的短刀和飞镖战斗的人。可能有一点不是那么堂堂正正，但是这就是飞侠的本质，没有必要否定。")
sm.sendSay("飞侠是可以用快速强力技能攻击敌人的职业。虽然你体力较弱，但因为行动快速，所以可以轻松地躲避怪物。因为运气很强，所以擅长爆击。")
if sm.sendAskAccept("怎么样？你想一起踏上飞侠之路吗？如果你决定选择飞侠之路，我就使用转职官的特权，邀请你到#b废都的废都酒吧#k去……那是个隐秘的地方，你应该感到荣幸。#r但是如果更喜欢其他职业的话，你可以拒绝。我会为你推荐飞侠之外的其他道路#k。"):
    sm.warp(103000003)
    sm.startQuest(parentID)
else:
    choice = sm.sendNext("你不想走飞侠之路吗？不愿意的话，我就不能勉强。那你就去选择其他道路吧。除了飞侠之外，还有四条道路可供选择。\r\n#b#L1#战士#l \r\n#b#L2#魔法师#l \r\n#b#L3#弓箭手#l \r\n#b#L5#海盗#l")
    if choice == 0:
        sm.sendNext("你想走战士之路吗？虽然很遗憾，但我尊重你的选择。我送你到#b武术教练#k那边吧。（确认后会自动传送到转职地图）")
        sm.createQuestWithQRValue(1406, "1")
        sm.warp(102000003)
    elif choice == 1:
        sm.sendNext("你想走弓箭手之路吗？虽然很遗憾，但我尊重你的选择。我送你到#b汉斯#k那边吧。（确认后会自动传送到转职地图）")
        sm.createQuestWithQRValue(1406, "2")
        sm.warp(101000003)
    elif choice == 2:
        sm.sendNext("你想走弓箭手之路吗？虽然很遗憾，但我尊重你的选择。我送你到#b郝丽娜#k那边吧。（确认后会自动传送到转职地图）")
        sm.createQuestWithQRValue(1406, "3")
        sm.warp(100000201)
    elif choice == 3:
        sm.sendNext("你想走海盗之路吗？虽然很遗憾，但我尊重你的选择。我送你到#b凯琳#k那边吧。（确认后会自动传送到转职地图）")
        sm.createQuestWithQRValue(1406, "5")
        sm.warp(120000101)
    sm.chatScript("嗯？还想再考虑一下吗？")
