# Ace
# 2150008
# Edelstein Temporary Airport (310000010)
# Warp from Edelstein to Victoria Island or Orbis.

map = [
    200090710, # Victoria Island Bound
    200090610 # Orbis Bound
]

answer = sm.sendSay("Where would you like to go? #b\r\n"
"#L0# Victoria Island #l\r\n"
"#L1# Orbis #l")
sm.warp(map[answer])