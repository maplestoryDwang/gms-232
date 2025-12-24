# id 2141000 (Kirston), field 270050100
from net.swordie.ms.constants import BossConstants
KIRSTON = 2141000
chaos = field.getId() == BossConstants.CHAOS_PINK_BEAN_FIELD

SOLOMON = BossConstants.CHAOS_SOLOMON if chaos else BossConstants.SOLOMON # Left statue
SOLOMON_HP = BossConstants.CHAOS_SOLOMON_HP if chaos else BossConstants.SOLOMON_HP # Left statue
HUGIN = BossConstants.CHAOS_HUGIN if chaos else BossConstants.HUGIN # Left bird
HUGIN_HP = BossConstants.CHAOS_HUGIN_HP if chaos else BossConstants.HUGIN_HP # Left bird
PB = BossConstants.CHAOS_PINK_BEAN_P1 if chaos else BossConstants.PINK_BEAN
PB_HP = BossConstants.CHAOS_PINK_BEAN_HP_P1 if chaos else BossConstants.PINK_BEAN_HP_P1
REX = BossConstants.CHAOS_REX if chaos else BossConstants.REX
REX_HP = BossConstants.CHAOS_REX_HP if chaos else BossConstants.REX_HP
MUNIN = BossConstants.CHAOS_MUNIN if chaos else BossConstants.MUNIN
MUNIN_HP = BossConstants.CHAOS_MUNIN_HP if chaos else BossConstants.MUNIN_HP
ARIEL = BossConstants.CHAOS_ARIEL if chaos else BossConstants.ARIEL
ARIEL_HP = BossConstants.CHAOS_ARIEL_HP if chaos else BossConstants.ARIEL_HP

sm.setSpeakerID(KIRSTON)
sm.setParam(1)
res = sm.sendAskAccept("With only the Mirror of the Goddess, I can summon the Black Mage again! But... Why isn't it working? What is this strange energy? It's completely different from the Black Mage... AHHHH!\r\n\r\n#b(You place your hands on Kirston's shoulders.)#k")
if res:
    sm.spawnMob(PB, 5, -46, PB_HP)
    sm.killMobs(BossConstants.SOLOMON_STATUE)
    sm.spawnMob(SOLOMON, 5, -46, SOLOMON_HP)
    sm.killMobs(BossConstants.HUGIN_STATUE)
    sm.spawnMob(HUGIN, 5, -46, HUGIN_HP)
    sm.removeNpc(KIRSTON)
    sm.killMobs(BossConstants.ARIEL_STATUE)
    sm.spawnMob(ARIEL, 5, -46, ARIEL_HP)
    sm.killMobs(BossConstants.REX_STATUE)
    sm.spawnMob(REX, 5, -46, REX_HP)
    sm.killMobs(BossConstants.MUNIN_STATUE)
    sm.spawnMob(MUNIN, 5, -46, MUNIN_HP)
