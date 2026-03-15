var status = -1;

function start(c, b, a) {
    if (c == -1) {
        cm.dispose()
    } else {
        if (c == 1) {
            status++
        } else {
            status--
        }
        if (status == 0) {
            cm.askYesNo("小女皇在冒险岛世界出现后，黑魔法师的气息好像变得更强了。听说已经出现了因为黑魔法师的气息而变质的物质。吃了变质的物质之后，怪物也许会变的更强。必须尽快对变质的物质进行分析才行……你能帮我吗？")
        } else {
            if (status == 1) {
                cm.forceStartQuest();
                cm.dispose()
            }
        }
    }
};