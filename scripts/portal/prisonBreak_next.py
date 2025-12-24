# 921160200
# Party Quest - Escape! PQ

# Hidden Street : Aerial Prison
if field.getId() == 921160600:
    warp = sm.getReactorQuantity() > 1
    if warp: # due to invisible reactor hidden on the map
        sm.chat("Unlock all the prison doors.")
else:
    warp = not sm.hasMobsInField()
    if not warp:
        sm.chat("The portal is not opened.")

if warp:
    sm.warp(field.getId() + 100)
