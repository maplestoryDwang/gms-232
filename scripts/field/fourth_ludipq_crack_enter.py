STAGE_2_CHECK = "Stage2Check"
stage2Array = [0,0,0,0,0]

field = chr.getOrCreateFieldByCurrentInstanceType(922010400)
if field.hasProperty(STAGE_2_CHECK):
    stage2Array = field.getProperty(STAGE_2_CHECK)
    stage2Array[3] = 1
    field.setProperty(STAGE_2_CHECK, stage2Array)