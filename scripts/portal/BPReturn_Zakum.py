# Portal from zakum back to previous map
if not sm.getReturnField() is None:
    sm.warp(sm.getReturnField())
else:
    sm.warp(100000000, 19)