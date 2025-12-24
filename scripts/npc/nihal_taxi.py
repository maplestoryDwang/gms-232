# Camel Cab 
# 2110005
# Warps between Ariant and Magatia through Outside North Entrance of Ariant and Sahel 1.

destinationDict = {
    260020000: {"MapID": 261000000}, # Outside North Entrance of Ariant => Magatia
    260020700: {"MapID": 260000000}, # Sahel 1 => Ariant
}

destination = destinationDict[sm.getFieldID()]

response = sm.sendAskYesNo(sm.formatString("Would you like to go to #m{MapID}#?", destination))
if response:
    sm.warp(destination["MapID"])
