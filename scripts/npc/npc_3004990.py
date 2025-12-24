# Tillam
# 3004990
# Warps between Shaded Dump Site and East Side 4.

destinationDict = {
    402000123: {"MapID": 410000419}, # Shaded Dump Site => East Side 4
    410000419: {"MapID": 402000123}, # East Side 4 => Shaded Dump Site
}

destination = destinationDict[sm.getFieldID()]

response = sm.sendAskYesNo(sm.formatString("Would you like to go to #m{MapID}#?", destination))
if response:
    sm.warp(destination["MapID"])
