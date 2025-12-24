# Helios Tower <99th/2nd Floor>
# 222020200 / 222020100
# Warps between the Helios Tower's 99th and 2nd Floors.

floor99 = 222020200
floor2 = 222020100

if sm.getFieldID() == floor99:
    sm.warp(floor2)
else:
    sm.warp(floor99)