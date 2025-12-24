# Leaf Plane
# 3002026
# Fox Tree Top (410000100)
# Warp from Fox Tree Top to Pantheon.

response = sm.sendAskYesNo("Would you like to go to Pantheon?")
if response:
    sm.warp(400000000, 2)