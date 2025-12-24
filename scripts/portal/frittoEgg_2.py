if parentID % 2 == 0:
    portal = 16
else:
    portal = 15
if not sm.getRandomIntBelow(3) == 0:  # 66%
    sm.teleportToPortal(portal)
    chr.addPolloFritto(2)
else:
    sm.warpInstanceOut(993000601, 0)  # Hidden Street : Secluded Forest
