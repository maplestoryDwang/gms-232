var status = -1;

function start() {
    action(1, 0, 0)
}

function start(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk("根据情报，最后一次看到白魔法师是在这里的艾琳森林……在这里一定能找到线索。", 17, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("据说，往这边走，就是女王的住所了。去见见妖精女皇艾菲尼娅吧。", 17, 0, true, true)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(32632, "");
                    cm.dispose()
                }
            }
        }
    }
}

function end(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.askMenu("什么事？我什么都不会告诉无礼的人类。快点给我消失。\r\n\r\n#L0##b(讲述一下关于黑暗怪物的事情。)#k#l", 0, 2510002)
        } else {
            if (status === a++) {
                cm.askMenu("黑暗怪物？那和我们有什么关系！对我们来说，人类比黑暗怪物可怕多了。他们绑架我们族人，偷走我们的宝物！就是为了要钱。\r\n\r\n#L0##b(讲述一下关于白魔法师的事情。)#k#l", 0, 2510002)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("#b(听到白魔法师的名字，艾菲尼娅的表情变得温和了些。)#k\r\n\r\n白魔法师……？为什么要找白魔法师？", 1, 2510002, false, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("他可是我见过的唯一的好人。我喜欢看他专心研究魔法的侧脸……他是理想主义。他的热情超过这世上所有的人。他一定会创造出比现在更好的世界。", 1, 2510002, true, true)
                    } else {
                        if (status === a++) {
                            cm.forceCompleteQuest(32632);
                            cm.sendNormalTalk("但是我不会随便告诉别人他的居所的。因为我根本没办法确认你不是坏人。", 0, 2510002, true, false);
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
};