# Maple Road : Maple Tree Hill (4000011)  Map for Explorer Tutorial

UNK_NPC = 10300  # NPC name - "???"


# Tutorial skipper snippet
def skip_tutorial():
    MAPLE_ADMINISTARTOR = 2007

    quests_to_complete = [
        32202,  # Mystical Maple Tree
        32203,  # The New Explorer
        32215  # A Strange Explorer
    ]

    map_to_warp = 104000000  # End of
    target_level = 10

    sm.setSpeakerID(MAPLE_ADMINISTARTOR)
    sm.removeEscapeButton()
    sm.lockInGameUI(True)

    if sm.sendAskYesNo("你想跳过教程任务，马上飞到 #m" + str(map_to_warp) + "#吗?"):
        if sm.getChr().getLevel() < target_level:
            sm.addLevel(target_level - sm.getChr().getLevel())

        for quest in quests_to_complete:
            sm.completeQuestNoRewards(quest)

        sm.warp(map_to_warp)

        sm.lockInGameUI(False)
        return True
    return False


if not sm.hasQuest(32202) or not sm.hasQuestCompleted(32203):
    if not skip_tutorial():
        sm.lockInGameUI(True)
        sm.showFieldEffect("maplemap/enter/10000", 0)
        sm.sendDelay(1000)

        # sm.spawnNpc(UNK_NPC, -240, 220)
        sm.npc_ChangeController(10300, "oid=1194624", -240, 220, 6, -290, -190, 1, True, 0, False)

        sm.showNpcSpecialActionByTemplateId(UNK_NPC, "summon", 0)
        sm.showEffect("Effect/Direction12.img/effect/tuto/BalloonMsg1/1", 900, 0, -120, 0, sm.getNpcObjectIdByTemplateId(UNK_NPC), False, 0)
        sm.sendDelay(1800)

        sm.moveNpcByTemplateId(UNK_NPC, False, 1000, 100)
        sm.moveCamera(False, 200, 200, 200)

        # The delay is for letting the Npc move
        sm.sendDelay(4542)

        sm.moveCamera(True, 0, 0, 0)

        sm.sendDelay(0)
        sm.sendDelay(900)

        sm.setSpeakerID(0)
        sm.setSpeakerType(3)
        sm.removeEscapeButton()
        sm.setPlayerAsSpeaker()
        sm.sendNext("刚刚那个女孩是谁呢？为什么一见到我就逃走了呢？")
        sm.sendNext("我也朝着那个方向过去看看吧")

        sm.removeNpc(UNK_NPC)
        sm.completeQuestNoRewards(32202)
        sm.lockInGameUI(False)
