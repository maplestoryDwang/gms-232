# id 940205100 (null), field 940205100
fieldId = field.getId()
num = (fieldId % 100) / 100
if num % 3 == 0:
    sm.showFieldEffect("monsterPark/stageEff/final", 0)
else:
    sm.showFieldEffect("monsterPark/stageEff/stage", 0)
    sm.showFieldEffect("monsterPark/stageEff/number/" + str(num), 0)
