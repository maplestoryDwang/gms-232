package net.swordie.ms.client.jobs.resistance;

import java.util.Arrays;

/**
 * Created on 21/07/2020.
 *
 * @author Asura
 */
public enum JaguarFlag {
    Grey(0, 0x0),
    Yellow(1, 0x0),
    Red(2, 0x0),
    Purple(3, 0x0),
    Blue(4, 0x0),

    Jaira(5, 0x1),
    SnowWhite(6, 0x2),
    Crimson(8, 0x4),
    Onyx(7, 0x8),
    ;
    private int id;
    private int flag;

    JaguarFlag(int id, int flag) {
        this.id = id;
        this.flag = flag;
    }

    public int getId() {
        return id;
    }

    public int getFlag() {
        return flag;
    }

    public static JaguarFlag getById(int id) {
        return Arrays.stream(values()).filter(jf -> jf.getId() == id).findFirst().orElse(null);
    }
}