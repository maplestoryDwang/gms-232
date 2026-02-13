sm.setSpeakerID(1012100)
sm.sendNext("你好，#h0#……我经常听麦加提起你的名字。听说你对弓箭手很感兴趣。我是弓箭手转职官赫丽娜。见到你很高兴……")
sm.sendSay("你对弓箭手的了解有多少呢？弓箭手是使用弓或弩，在远距离攻击敌人的职业……虽然移动速度相对较慢，但锐利的箭矢从来不会射偏，每一发都非常具有威胁。")
if sm.sendAskAccept("如果你真的想成为弓箭手，我就用转职官的特权，邀请你到#b射手村的弓箭手培训中心#k来。#r如果你想选择其他职业，可以拒绝。我会帮助你走上其他道路的#k……你想成为弓箭手吗？"):
    sm.warp(100000201)
    sm.startQuest(parentID)
else:
    choice = sm.sendNext("你不想走弓箭手之路吗？不愿意的话，我就不能勉强。那你就去选择其他道路吧。除了弓箭手之外，还有四条道路可供选择。\r\n#b#L1#战士#l \r\n#b#L2#魔法师#l \r\n#b#L4#飞侠#l \r\n#b#L5#海盗#l")
    if choice == 0:
        sm.sendNext("你想走战士之路吗？虽然很遗憾，但我尊重你的选择。我送你到#b武术教练#k那边吧。（确认后会自动传送到转职地图）")
        sm.createQuestWithQRValue(1406, "1")
        sm.warp(102000003)
    elif choice == 1:
        sm.sendNext("你想走弓箭手之路吗？虽然很遗憾，但我尊重你的选择。我送你到#b汉斯#k那边吧。（确认后会自动传送到转职地图）")
        sm.createQuestWithQRValue(1406, "2")
        sm.warp(101000003)
    elif choice == 2:
        sm.sendNext("你想走飞侠之路吗？虽然很遗憾，但我尊重你的选择。我送你到#b达克鲁#k那边吧。（确认后会自动传送到转职地图）")
        sm.createQuestWithQRValue(1406, "4")
        sm.warp(103000003)
    elif choice == 3:
        sm.sendNext("你想走海盗之路吗？虽然很遗憾，但我尊重你的选择。我送你到#b凯琳#k那边吧。（确认后会自动传送到转职地图）")
        sm.createQuestWithQRValue(1406, "5")
        sm.warp(120000101)
    sm.chatScript("嗯？还想再考虑一下吗？")