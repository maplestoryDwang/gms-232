# Taxi 
# 2150007
# Edelstein (1000064)
# Warp from Edelstein to Mine Entrance or Haven.

optionList = [
    310040200, # Mine Entrance
    310070000 # Haven
]

destination = sm.sendNext("Where would you like to go? #b\r\n"
"#L0# Verne Mine #l\r\n"
"#L1# Haven #l\r\n")
sm.warp(optionList[destination])