if parentID % 2 == 0:
    portal = 14
else:
    portal = 13
if not sm.getRandomIntBelow(5) == 0:  # 80%
    sm.teleportToPortal(portal)
    chr.addPolloFritto(2)
else:
    sm.warpInstanceOut(993000601, 0)  # Hidden Street : Secluded Forest
    chr.addPolloFritto(1)  # Participation Trophy
