from net.swordie.ms.constants import BossConstants

instance = chr.getInstance()
if instance is not None:
    if not instance.hasProperty("spawned"):
        instance.addProperty("spawned", True)
        if sm.getFieldID() == BossConstants.VON_LEON_EASY_FIELDID:
            sm.spawnMob(BossConstants.VON_LEON_EASY, 28, -181, False)
        elif sm.getFieldID() == BossConstants.VON_LEON_NORMAL_FIELDID:
            sm.spawnMob(BossConstants.VON_LEON_NORMAL, 28, -181, False)
        elif sm.getFieldID() == BossConstants.VON_LEON_HARD_FIELDID:
            sm.spawnMob(BossConstants.VON_LEON_HARD, 28, -181, False)
