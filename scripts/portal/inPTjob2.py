# 200020001
if 2400 == chr.getJob(): #Phantom 1st job
    sm.warpInstanceIn(915010000, 1)
    sm.setQRValue(25102, "1", False)
elif 2410 <= chr.getJob() <= 2411:
    sm.warp(915020000, 2)
else:
    sm.chat("Only Phantoms can enter.")
sm.dispose()
