package net.swordie.ms.util;

import java.lang.reflect.Field;
import java.lang.reflect.Modifier;
import java.util.LinkedList;
import java.util.List;

public class ClassSizeChecker {

    private static final int NR_BITS = Integer.parseInt(System.getProperty("sun.arch.data.model"));
    private static final int BYTE = 8;
    private static final int WORD = NR_BITS / BYTE;
    private static final int MIN_SIZE = 16;
    public static final sun.misc.Unsafe UNSAFE;

    static {
        Object theUnsafe = null;
        Exception exception = null;
        try {
            Class<?> uc = Class.forName("sun.misc.Unsafe");
            Field f = uc.getDeclaredField("theUnsafe");
            f.setAccessible(true);
            theUnsafe = f.get(uc);
        } catch (Exception e) {
            exception = e;
        }
        UNSAFE = (sun.misc.Unsafe) theUnsafe;
        if (UNSAFE == null) throw new Error("Could not obtain access to sun.misc.Unsafe", exception);
    }

    public static int sizeOf(Class src) {
        List<Field> instanceFields = new LinkedList<Field>();
        do {
            if (src == Object.class) return MIN_SIZE;
            for (Field f : src.getDeclaredFields()) {
                if ((f.getModifiers() & Modifier.STATIC) == 0) {
                    instanceFields.add(f);
                }
            }
            src = src.getSuperclass();
        } while (instanceFields.isEmpty());
        long maxOffset = 0;
        for (Field f : instanceFields) {
            long offset = UNSAFE.objectFieldOffset(f);
            if (offset > maxOffset) maxOffset = offset;
        }
        return (((int) maxOffset / WORD) + 1) * WORD;
    }
}
