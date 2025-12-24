# Dolphin
# 2060009
# Warps between Aquarium and Pier on the Beach. Also warps to The Sharp Unknown from Aquarium.

destinationDict = {
    230000000: [ # Aquarium destinations
        {"MapID": 230030200}, # The Sharp Unknown
        {"MapID": 251000100}, # Pier on the Beach
    ],
    251000100: {"MapID": 230000000}, # Pier on the Beach => Aquarium
}

currentMap = sm.getFieldID()
optionList = destinationDict[currentMap]

if len(optionList) > 1:
    destString = ["Where would you like to go? \r\n"]
    options = sm.selectionString("#L{i}##m{MapID}##l", optionList)
    destString.append(options)
    destIndex = sm.sendNext(sm.join(destString))
    sm.warp(optionList[destIndex]["MapID"])
else:
    response = sm.sendAskYesNo(sm.formatString("Would you like to go to #m{MapID}#?", optionList))
    if response:
        sm.warp(optionList["MapID"])
