fieldId = chr.getFieldID()

sm.showFieldEffect("Map/Effect.img/giantBoss/enter/" + str((parentID / 10) % 1000))
if fieldId == 863010100:
    sm.changeFoothold("open", True)
    sm.changeFoothold("clear", True)
sm.showGolluxMiniMap()