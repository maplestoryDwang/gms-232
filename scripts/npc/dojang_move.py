# Mu Lung Dojo Bulletin Board
# 2091006
# Mu Lung Temple (250000100)
# Warp from Mu Lung Temple to Mu Lung Dojo Entrance.

response = sm.sendAskYesNo("Would you like to go to Mu Lung Dojo?")

if response:
    sm.setReturnField()
    sm.warp(925020000)