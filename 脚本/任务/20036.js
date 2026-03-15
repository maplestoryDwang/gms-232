var status = -1;

function start(d, c, b) {
    if (d === 1) {
        status++
    } else {
        status--
    }
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.sendNextPrevNoESC("是的，女皇陛下说的总是对的。虽然还有很多不足之处，但这个少年好像确实继承了光之骑士的血。", 1106003)
        } else {
            if (status === a++) {
                cm.sendNextPrevSNoESC("我父亲是光之骑士？我会成为光之骑士？我只是个平凡的少年。连名字都没有……")
            } else {
                if (status === a++) {
                    cm.sendNextPrevNoESC("选择权在你。但是你生来就带有光明之血，最好不要和自己的命运对抗。为了你，同时也是为了冒险岛世界。\r\n你愿意跟我走吗？")
                } else {
                    if (status === a++) {
                        cm.sendNextPrevNoESC("你好像需要个名字。就用“从光明中诞生的人”的意思，起名叫#b#e“米哈尔”#k#n如何？好像很适合你。现在和我一起到圣地去吧。没有比那里更适合让你成为光之骑士的了。");
                        cm.changeJob(5100);
                        cm.gainItem(1142399, 1);
                        cm.gainItem(1052444, 1);
                        cm.gainItem(1302077, 1);
                        cm.gainSp(5);
                        cm.teachSkill(50001245, 1, 1);
                        var e = 10 - cm.getLevel();
                        for (var a = 0; a < e; a++) {
                            cm.getPlayer().levelUp()
                        }
                        cm.dispose();
                        cm.warp(913070071, 0);
                        cm.forceCompleteQuest()
                    } else {
                        cm.dispose()
                    }
                }
            }
        }
    }
};