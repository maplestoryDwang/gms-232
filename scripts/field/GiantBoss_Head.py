from net.swordie.ms.constants import BossConstants

GOLLUX_HEAD_2 = 9390602
GOLLUX_HEAD = 9390600
GOLLUX_HEAD_1 = 9390601
GOLLUX_HEAD_FOOTHOLD_STAGE = "GolluxFootholdStage"

difficulty = 4
if chr.getInstance().getField(863010240).hasProperty(BossConstants.GOLLUX_FINISHED_KEY):
    difficulty -= 1
if chr.getInstance().getField(863010430).hasProperty(BossConstants.GOLLUX_FINISHED_KEY):
    difficulty -= 1
if chr.getInstance().getField(863010330).hasProperty(BossConstants.GOLLUX_FINISHED_KEY):
    difficulty -= 1



sm.showFieldEffect("Map/Effect.img/giantBoss/enter/" + str((parentID / 10) % 1000))
spawned = field.hasProperty(BossConstants.GOLLUX_SPAWN_KEY) and field.getProperty(BossConstants.GOLLUX_SPAWN_KEY)
if not spawned:
    field.setProperty(BossConstants.GOLLUX_SPAWN_KEY, True)
    if difficulty == 1:
        sm.spawnMob(GOLLUX_HEAD, 0, 62, False, BossConstants.EASY_GOLLUX_HEAD_JAW)
    elif difficulty == 2:
        sm.spawnMob(GOLLUX_HEAD, 0, 62, False, BossConstants.NORMAL_GOLLUX_HEAD_JAW)
    elif difficulty == 3:
        sm.spawnMob(GOLLUX_HEAD, 0, 62, False, BossConstants.HARD_GOLLUX_HEAD_JAW)
    elif difficulty == 4:
        sm.spawnMob(GOLLUX_HEAD, 0, 62, False, BossConstants.HELL_GOLLUX_HEAD_JAW)
sm.showGolluxMiniMap()

if field.hasProperty(GOLLUX_HEAD_FOOTHOLD_STAGE):
    if field.getProperty(GOLLUX_HEAD_FOOTHOLD_STAGE) == 1:
        sm.changeFoothold("phase2-1", True)
        sm.changeFoothold("phase2-2", True)
    elif field.getProperty(GOLLUX_HEAD_FOOTHOLD_STAGE) == 2:
        sm.changeFoothold("phase2-1", True)
        sm.changeFoothold("phase2-2", True)
        sm.changeFoothold("phase3", True)