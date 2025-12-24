# Alliance back to saved map
if not sm.getReturnField() is None:
    sm.warp(sm.getReturnField())
else:
    sm.warp(100000000, 19)