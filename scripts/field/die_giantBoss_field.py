from net.swordie.ms.constants import BossConstants

dict = {
    9390630 : [863010400],
    9390631 : [863010300, 863010310, 863010420],
    9390633 : [863010200],
    9390634 : [863010220],
    9390635 : [863010210, 863010230],
    9390638 : [863010320],
    9390640 : [863010410]
}

fieldId = field.getId()
mobId = mob.getTemplateId()

if field.hasProperty(BossConstants.GOLLUX_FINISHED_KEY) and field.getProperty(BossConstants.GOLLUX_FINISHED_KEY):
    sm.changeFoothold("open", True)
    sm.changeFoothold("clear", True)
    
if sm.hasMobsInField(parentID, mobId):
    sm.createFallingCatcher("DropStoneGiantBoss1", 40, 3, 30)
    sm.createFallingCatcher("DropStoneGiantBoss2", 40, 2, 40)
    sm.createFallingCatcher("DropStoneGiantBoss3", 40, 3, 30)
else:
    if not field.hasProperty(BossConstants.GOLLUX_FINISHED_KEY):
        field.setProperty(BossConstants.GOLLUX_FINISHED_KEY, True)
        sm.golluxPortalOpen("open")
        sm.golluxPortalOpen("clear")
sm.showGolluxMiniMap()