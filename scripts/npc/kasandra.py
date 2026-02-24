# Cassandra（NPC：卡珊德拉）

def JumpQuestReward():
    response = "你还需要完成以下跳跃任务：\r\n"
    canReceiveReward = True

    # 扎昆跳跃任务
    if not "zak=1" in sm.getQRValue(9998):
        response += "- 扎昆跳跃任务 \r\n"
        canReceiveReward = False

    # 地铁 跳跃任务 第1部分
    if not "sub1=1" in sm.getQRValue(9998):
        response += "- 地铁跳跃任务 第1部分 \r\n"
        canReceiveReward = False

    # 地铁 跳跃任务 第2部分
    if not "sub2=1" in sm.getQRValue(9998):
        response += "- 地铁跳跃任务 第2部分 \r\n"
        canReceiveReward = False

    # 地铁 跳跃任务 第3部分
    if not "sub3=1" in sm.getQRValue(9998):
        response += "- 地铁跳跃任务 第3部分 \r\n"
        canReceiveReward = False

    # 魔法密林 跳跃任务
    if not "ellinia=1" in sm.getQRValue(9998):
        response += "- 魔法密林跳跃任务 \r\n"
        canReceiveReward = False

    # 沼泽地（Sleepywood）跳跃任务
    if not "sleepy=1" in sm.getQRValue(9998):
        response += "- 沼泽地跳跃任务 \r\n"
        canReceiveReward = False

    # 已经领取过奖励
    if "receivedRewards" in sm.getQRValue(9998):
        canReceiveReward = False
        sm.sendNext("你已经领取过奖励了。奖励只能领取一次。")
        return

    # 所有跳跃任务完成
    if canReceiveReward:
        sm.sendNext("恭喜你完成了所有跳跃任务！这是你的一次性奖励。")
        if sm.canHold(1142957) and sm.canHold(2435184) and sm.canHold(5204029) and sm.canHold(1702800):
            sm.giveItem(1142957)
            sm.giveItem(2435184)
            sm.giveItem(1702800)
            sm.giveItem(5204029)
            sm.setQRValue(9998, "receivedRewards", "1")
        else:
            sm.sendNext("请先清理你的装备栏空间。")
    else:
        sm.sendNext(response)


# ------------------------------------------------------------------------

selection = sm.sendNext(
    "你好，#h # \r\n"
    "希望你在 Swordie 玩得开心！\r\n\r\n"
    "#b #L0#我想领取跳跃任务奖励 #l"
)

if selection == 0:
    JumpQuestReward()