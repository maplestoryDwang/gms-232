# horntail - Cave of Life - Cave of trial 1

if not sm.hasMobsInField():
    fid = field.getId()
    nextField = fid + 100
    if fid == 240060102: # Easy horntail head 2
        nextField = 240060300 # Easy horntail cave
    sm.warp(nextField)
else:
    sm.chat("Please eliminate all monsters")
