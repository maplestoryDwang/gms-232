package net.swordie.ms.jwzlib;

public class WzEmpty<T> extends WzProperty {

    protected WzEmpty(String empty, T defaultValue) {
        super(empty, null, Type.STRING);
        setValue(defaultValue);
    }
}
