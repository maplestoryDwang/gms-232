# 32216 Victoria Island or Bust!, sugar : Maple Road | the Sangri-La
sm.setSpeakerID(10306)
sm.sendNext("你那样帮我，而且刚才还打倒了怪物。看来")
sm.setPlayerAsSpeaker()
sm.sendNext(" 你已经是一个像模像样的冒险家了。你决定好选择哪个职业了吗？")
sm.setSpeakerID(10306)
sm.sendNext("恩，现在开始，你要去的金银岛中，有另外五种职业可以进行转职。嗯，我记得是……战士、魔法师、弓箭手、飞侠和海盗。有这五种职业。")
sm.setPlayerAsSpeaker()
sm.sendNext("#b那些职业各有什么不同呢？#k")
sm.setSpeakerID(10306)
sm.sendNext("首先，战士的力量和体力很强，适合近距离战斗。同时，防御力也相当出色，所以不会轻易倒下。魔法师与战士不同，通过魔法进行战斗，所以相比力量，智力更加重要。因为使用魔法，所以可在远距离一次攻击多个敌人。")
sm.sendNext("说到远距离攻击，弓箭手才是最适合的。其可以在远距离使用箭矢，并且控制距离的能力也相当出色。飞侠虽有不亚于战士的近距离战斗能力，但在战斗时往往以速度为主，而非力量。")
sm.sendNext("最后一个，海盗……其特征很难用一句话来概括。海盗既能用体术发动近身攻击，又能在远距离用手枪或大炮进行攻击。而且，无论哪种攻击方式，都相当华丽和富有个性。")

selection = sm.sendNext("船长已经跟转职官联系过了，只要你现在先决定好的话，待会儿一到港口就能立即收到转职官的联系。")
if selection == 0:
    sm.sendNext("你要选择什么职业呢？\r\n#b#L1# 具备强大力量和防御力的战士#l\r\n#L2# 利用高超的智力使用魔法的魔法师#l\r\n#L3# 善于远距离攻击和控制距离的弓箭手#l\r\n#L4# 进行快速攻击的飞侠#l \r\n#L5# 战斗风格华丽独特的海盗#l#k")
elif selection == 1:
    sm.sendNext("你一定能够成为帅气的战士！")
elif selection == 2:
    sm.sendNext("你一定能够成为帅气的魔法师！")
elif selection == 3:
    sm.sendNext("你一定能够成为帅气的弓箭手！")
elif selection == 4:
    sm.sendNext("你一定能够成为帅气的飞侠！")

sm.warp(104000000, 0)
sm.sendNext("你一定能够成为帅气的海盗！")
sm.startQuest(parentID)
sm.completeQuest(parentID)
sm.createQuestWithQRValue(1406, str(selection+1))
if sm.getChr().getLevel() < 10:
    sm.addLevel(10 - sm.getChr().getLevel())
