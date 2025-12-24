from net.swordie.ms.constants import BossConstants
chaos = field.getId() == BossConstants.CHAOS_PINK_BEAN_FIELD

REX = BossConstants.CHAOS_REX if chaos else BossConstants.REX
MUNIN = BossConstants.CHAOS_MUNIN if chaos else BossConstants.MUNIN
ARIEL = BossConstants.CHAOS_ARIEL if chaos else BossConstants.ARIEL
SOLOMON = BossConstants.CHAOS_SOLOMON if chaos else BossConstants.SOLOMON
HUGIN = BossConstants.CHAOS_HUGIN if chaos else BossConstants.HUGIN

# Check if PB should be spawned
if field.getLifeByTemplateId(REX) is None and field.getLifeByTemplateId(MUNIN) is None and field.getLifeByTemplateId(ARIEL) is None and field.getLifeByTemplateId(SOLOMON) is None and field.getLifeByTemplateId(HUGIN) is None:
    pink_bean = field.getLifeByTemplateId(BossConstants.CHAOS_PINK_BEAN_P1 if chaos else BossConstants.PINK_BEAN)
    if pink_bean is not None:
        sm.killMobs(pink_bean.getTemplateId())

    PB = BossConstants.CHAOS_PINK_BEAN_P2 if chaos else BossConstants.PINK_BEAN_P2
    PB_HP = BossConstants.CHAOS_PINK_BEAN_HP_P2 if chaos else BossConstants.PINK_BEAN_HP_P2
    sm.spawnMob(PB, 5, -42, PB_HP)
