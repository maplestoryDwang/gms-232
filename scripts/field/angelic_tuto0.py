# id 940011000 (Nova's Sanctum : Pantheon), field 940011000
MAPLE_ADMINISTARTOR = 2007

skills_to_add = [
    60011222,
    60011216,
    60011218,
    60011220,
    60010217,
]
map_to_warp = 400000000 # Secret Plaza
target_level = 10
if sm.getChr().getLevel() < target_level:
    sm.addLevel(target_level - sm.getChr().getLevel())
for skillID in skills_to_add:
    sm.giveSkill(skillID)
sm.warp(map_to_warp)