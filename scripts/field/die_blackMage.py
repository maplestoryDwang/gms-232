MAP_DIFF = 200 # 100 if direction maps are included

AEONIAN_RISE = 8880500
TANADIAN_RUIN = 8880501

if field.getLifeByTemplateId(AEONIAN_RISE) is None and field.getLifeByTemplateId(TANADIAN_RUIN) is None:
    sm.warp(sm.getFieldID() + MAP_DIFF)