# [Theme Dungeon] Ellinel Fairy Academy
# This version appears for Wind Archer

IRENA = 1101005 # NPC ID
THEME_DUNGEON_ELLINEL_FAIRY_ACADEMY = 32151 # QUEST ID
NORTH_FOREST_GIANT_TREE = 101030000 # MAP ID

sm.setSpeakerID(IRENA)
response = sm.sendAskAccept("啊，你来得正好。我们接到外部发来的紧急请求，这事非你不可。\r\n\r\n#b(※ #r妖精学院艾利涅#b是特殊主题副本，最高至#r59级#b为止，提供与勇士的等级相匹配的怪物和任务经验值。")

if response:
    sm.sendNext("事情是这样的，听说眼下#b妖精学院艾利涅#k发生了重大骚乱。妖精学院艾利涅所在之处不同于魔法密林，是不受人类影响的妖精们的领地。正因此，该地至今仍保存着太初时期的风貌。但是，最近#r有一名人类魔法师#k打破了那里的平静。")
else:
    sm.dispose()

sm.sendNext("虽然详细的事情我也不是很清楚，但如果骚乱继续扩大的话，妖精和人类之间的关系肯定会日趋恶化，因此，得去弄清楚事情的真相才行。勇士你去的话，肯定能够应对这种状况。那么，请先到魔法密林附近的北部森林，寻找#b潘喜#k吧。")

response = sm.sendAskYesNo("不过，你知道潘喜的位置吗？如果你能自己找到那再好不过。要不让我送你过去吧。")

if response:
    sm.startQuestNoCheck(THEME_DUNGEON_ELLINEL_FAIRY_ACADEMY)
    sm.completeQuestNoRewards(parentID)
    sm.warp(NORTH_FOREST_GIANT_TREE)
sm.dispose()
