# Phantom contimove
fieldIdStr = sm.getQRValue(25010)
if fieldIdStr != "":
    fieldId = int(fieldIdStr)
else:
    fieldId = 100000000
if sm.sendAskYesNo("Do you want to fly to #m" + str(fieldId) + "#?"):
    sm.warp(int(sm.getQRValue(25010)))