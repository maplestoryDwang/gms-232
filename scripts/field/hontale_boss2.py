# 240060000 ~ 240060002
BASE_MAP = 240060100

NORMAL = 0
HARD = 1
EASY = 2

diff = field.getId() - BASE_MAP
sm.chat(str(field.getId()))
ht = 8810001 + diff * 100
if diff == HARD:
    sm.spawnMob(ht, -380, 230, False, 3300000000)
else:
    sm.spawnMob(ht, -380, 230)