from net.swordie.ms.constants import BossConstants

GOLLUX_HEAD = 9390600
GOLLUX_HEAD_1 = 9390601
GOLLUX_HEAD_2 = 9390602
GOLLUX_HEAD_FOOTHOLD_STAGE = "GolluxFootholdStage"

chr = sm.getChr()

difficulty = 4
if chr.getInstance().getField(863010240).hasProperty(BossConstants.GOLLUX_FINISHED_KEY):
    difficulty -= 1
if chr.getInstance().getField(863010430).hasProperty(BossConstants.GOLLUX_FINISHED_KEY):
    difficulty -= 1
if chr.getInstance().getField(863010330).hasProperty(BossConstants.GOLLUX_FINISHED_KEY):
    difficulty -= 1

if mob.getTemplateId() == GOLLUX_HEAD:
    if difficulty == 1:
        sm.spawnMob(GOLLUX_HEAD_1, 0, 62, False, BossConstants.EASY_GOLLUX_HEAD_EYES)
    elif difficulty == 2:
        sm.spawnMob(GOLLUX_HEAD_1, 0, 62, False, BossConstants.NORMAL_GOLLUX_HEAD_EYES)
    elif difficulty == 3:
        sm.spawnMob(GOLLUX_HEAD_1, 0, 62, False, BossConstants.HARD_GOLLUX_HEAD_EYES)
    elif difficulty == 4:
        sm.spawnMob(GOLLUX_HEAD_1, 0, 62, False, BossConstants.HELL_GOLLUX_HEAD_EYES)

    field.setProperty(GOLLUX_HEAD_FOOTHOLD_STAGE, 1)
    sm.changeFoothold("phase2-1", True)
    sm.changeFoothold("phase2-2", True)
elif mob.getTemplateId() == GOLLUX_HEAD_1:
    if difficulty == 1:
        sm.spawnMob(GOLLUX_HEAD_2, 0, 62, False, BossConstants.EASY_GOLLUX_HEAD_JEWEL)
    elif difficulty == 2:
        sm.spawnMob(GOLLUX_HEAD_2, 0, 62, False, BossConstants.NORMAL_GOLLUX_HEAD_JEWEL)
    elif difficulty == 3:
        sm.spawnMob(GOLLUX_HEAD_2, 0, 62, False, BossConstants.HARD_GOLLUX_HEAD_JEWEL)
    elif difficulty == 4:
        sm.spawnMob(GOLLUX_HEAD_2, 0, 62, False, BossConstants.HELL_GOLLUX_HEAD_JEWEL)

    field.setProperty(GOLLUX_HEAD_FOOTHOLD_STAGE, 2)
    sm.changeFoothold("phase3", True)

elif mob.getTemplateId() == GOLLUX_HEAD_2:
    field.setProperty(BossConstants.GOLLUX_FINISHED_KEY, True)
    sm.showGolluxMiniMap()