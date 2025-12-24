if parentID % 2 == 0:
    portal = 20
else:
    portal = 19
if not sm.getRandomIntBelow(2) == 0:  # 50%
    sm.teleportToPortal(portal)
    chr.addPolloFritto(2)
else:
    sm.warpInstanceOut(993000601, 0)  # Hidden Street : Secluded Forest
