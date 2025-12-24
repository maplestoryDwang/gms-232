# Spa (M) / (F)
# 809000101 / 809000201
# Warp back to the corresponding Locker Room map.

currentMap = sm.getFieldID()
# Locker Room IDs: 801000100 for (M), 801000200 for (F).
# Just calculate the map destination ID by subtracting 8000001 from currentMap before warping
sm.warp(currentMap - 8000001, 3)