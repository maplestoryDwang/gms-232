#Von Bon spawned portal
from net.swordie.ms.world.field.instance.instancehelper.boss import VonBonInstanceHelper
from net.swordie.ms.constants import BossConstants

instance = chr.getInstance()
if instance is None:
    sm.dispose()

helper = instance.getInstanceHelper()
if helper.canPlayerWarpToDimension():
    if helper.isChaosMode():
        sm.warp(BossConstants.VON_BON_CHAOS_REALM_FIELDID)
    else:
        sm.warp(BossConstants.VON_BON_NORMAL_REALM_FIELDID)