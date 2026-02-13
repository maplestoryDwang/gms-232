sm.setSpeakerID(1032001)
sm.sendNext("哦，你就是麦加说的那个人啊。你好？听说你对魔法师之路感兴趣。那么，我魔法师转职官汉斯可以帮助你。")
sm.sendSay("相信你应该已经对魔法师有所了解了。那是以较高的智力为基础，使用魔法的职业。虽然远距离和近距离战斗都很出色，但体力稍微有点弱……但是魔法师创造出了很多魔法来克服这一缺点，不要太担心。")
if sm.sendAskAccept("你看上去好像充分具备成为魔法师的素质……你想成为魔法师吗？接受的话，我就使用转职官的特权，邀请你到#b魔法密林的魔法图书馆#k去。和我见个面，然后帮你转职。#r但是就算拒绝，也不是没有别的路可走。拒绝的话，我可以为你介绍魔法师以外的职业。#k"):
    sm.warp(101000003)
    sm.startQuest(parentID)
else:
    choice = sm.sendNext("你不想走魔法师之路吗？不愿意的话，我就不能勉强。那你就去选择其他道路吧。除了魔法师之外，还有四条道路可供选择。\r\n#b#L1#战士#l \r\n#b#L3#弓箭手#l \r\n#b#L4#飞侠#l \r\n#b#L5#海盗#l")
    if choice == 0:
        sm.sendNext("你想走战士之路吗？虽然很遗憾，但我尊重你的选择。我送你到#b武术教练#k那边吧。（确认后会自动传送到转职地图）")
        sm.createQuestWithQRValue(1406, "1")
        sm.warp(102000003)
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
