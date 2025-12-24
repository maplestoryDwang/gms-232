sm.changeReactorStateByTemplateId(2201004, 1, 0, 0) # Starting thing
sm.changeReactorStateByTemplateId(2208005, 1, 0, 0)
sm.changeReactorStateByTemplateId(2208006, 1, 0, 0)
sm.changeReactorStateByTemplateId(2208007, 1, 0, 0)
sm.changeReactorStateByTemplateId(2208008, 1, 0, 0)
sm.changeReactorStateByTemplateId(2208009, 1, 0, 0)
sm.changeReactorStateByTemplateId(2208010, 1, 0, 0)

field.setProperty("Phase", 1)

easy = field.getId() == 220080100
normal = field.getId() == 220080200
hard = field.getId() == 220080300

if easy:
    mob = 8500000
elif normal:
    mob = 8500010
else:
    mob = 8500020
sm.spawnMob(mob, -4, 179)

sm.startTweezerTimers()