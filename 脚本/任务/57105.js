var status = -1;

function start(d, c, b) {
    if (d == 1) {
        status++
    } else {
        status--
    }
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.sendNext_Illus("你、你是……")
        } else {
            if (status === a++) {
                cm.sendNextPrevS("阁下是毛利元就大人吧。我曾经在本能寺攻略战的军事会议中见过阁下。我是松山家的家臣，姐崎朝信的儿子，名为姐崎剑斗。我刚刚才到达“这边”，一到达就立刻赶来枫叶山丘了。")
            } else {
                if (status === a++) {
                    cm.sendNextPrev_Illus("欢迎来到枫叶山丘。不知道该说是幸运还是不幸，我和我的三个儿子是最先到达“这边”这个世界的。为了方便联合军再次聚集在一起，我们就在枫叶山丘建起了这个本阵。同时，我们也在帮忙之后到达的各位尽快适应这个世界。")
                } else {
                    if (status === a++) {
                        cm.sendNextPrevS("帮忙适应这个世界？")
                    } else {
                        if (status === a++) {
                            cm.askAcceptDecline_Illus("那就请剑斗你先确认一下，看看现在的自己是否能够活动自如吧。")
                        } else {
                            cm.forceStartQuest();
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
}

function end(d, c, b) {
    if (d == 1) {
        status++
    } else {
        status--
    }
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.sendNextS("呵，原来如此。在走向这边的途中，我就一直觉得身体特别沉重。本以为是负伤的缘故，但是现在想想，我身上的伤势并不重，但身体却完全不听使唤。")
        } else {
            if (status === a++) {
                cm.sendNextPrev_Illus("没错。“这边”和我们所在的日本完全是两个截然不同的世界。所以我们没办法完全发挥出原本的力量来。也就是说，两个世界的物理法则并不一样。")
            } else {
                if (status === a++) {
                    cm.sendNextPrevS("那可就不好办了啊。突然来到这个未知的世界，已经让我觉得很是头疼了。没想到居然还不能发挥出原本的力量……")
                } else {
                    if (status === a++) {
                        cm.askYesNo_Illus("我刚才提到的帮忙适应这个世界，指的就是这个意思。不过，我的方法并不能永久解决这个问题，只能当作一时的缓兵之计而已。")
                    } else {
                        if (status === a++) {
                            cm.forceCompleteQuest();
                            cm.gainExp(1242);
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
};