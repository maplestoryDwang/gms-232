sm.setSpeakerID(1022000)
sm.sendNext("你就是麦加推荐的那个人啊。听说你想转职成战士……对吗？我就是战士转职官武术教练。我可以为想要以战士身份冒险的人提供帮助。")
sm.sendSay("你对战士了解多少呢？战士是以强大的力量和体力为基础，挥舞近战武器打倒敌人的职业。在最接近敌人的地方战斗的无畏的人。是不是很有魅力？")
if sm.sendAskAccept("你好像充分拥有了资格。像你这样的人想成为战士，我随时表示欢迎。你想成为战士吗？接受的话，我就使用转职官的特权，邀请你到#b勇士部落的战士圣殿#k去。#r但是就算拒绝，也不是没有别的路可走。拒绝的话，我可以引导你走其他职业的道路#k。"):
    sm.warp(102000003)
    sm.startQuest(parentID)
else:
    choice = sm.sendNext("你不想走战士之路吗？不愿意的话，我就不能勉强。那你就去选择其他道路吧。除了战士之外，还有四条道路可供选择。\r\n#b#L2#魔法师#l \r\n#b#L3#弓箭手#l \r\n#b#L4#飞侠#l \r\n#b#L5#海盗#l")
    if choice == 0:
        sm.sendNext("你想走魔法师之路吗？虽然很遗憾，但我尊重你的选择。我送你到#b汉斯#k那边吧。（确认后会自动传送到转职地图）")
        sm.createQuestWithQRValue(1406, "2")
        sm.warp(101000003)
    elif choice == 1:
        sm.sendNext("你想走弓箭手之路吗？虽然很遗憾，但我尊重你的选择。我送你到#b赫丽娜#k那边吧。（确认后会自动传送到转职地图）")
        sm.createQuestWithQRValue(1406, "3")
        sm.warp(100000201)
    elif choice == 2:
        sm.sendNext("你想走飞侠之路吗？虽然很遗憾，但我尊重你的选择。我送你到#b达克鲁#k那边吧。（确认后会自动传送到转职地图）")
        sm.createQuestWithQRValue(1406, "4")
        sm.warp(103000003)
    elif choice == 3:
        sm.sendNext("你想走海盗之路吗？虽然很遗憾，但我尊重你的选择。我送你到#b凯琳#k那边吧。（确认后会自动传送到转职地图）")
        sm.createQuestWithQRValue(1406, "5")
        sm.warp(120000101)
    sm.chatScript("嗯？还想再考虑一下吗？")
