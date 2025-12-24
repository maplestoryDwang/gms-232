currentMap = sm.getFieldID()
if sm.hasMobsInField() or (field.hasProperty("cleared") and not field.getProperty("cleared")):
    sm.chat("Kill all monsters first.")
elif currentMap / 10000 == 92507 and not currentMap == 925080000 and field.hasProperty("cleared") and field.getProperty("cleared"):
    sm.warp(currentMap+100, 0)
elif currentMap == 925080000:
    sm.warp(925020003, 1)
elif currentMap == 925070000:
    sm.createDojoClock(901)
    sm.warp(currentMap + 100,0)