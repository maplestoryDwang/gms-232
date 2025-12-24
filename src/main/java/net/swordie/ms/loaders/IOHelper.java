package net.swordie.ms.loaders;

import net.swordie.ms.ServerConstants;

import java.io.IOException;
import java.io.RandomAccessFile;
import java.util.Map;

public class IOHelper {
    public final static String READ_MODE = "r";
    public final static String READ_WRITE_MODE = "rw";

    public static void writeOffsetTable(Map<Integer, Integer> table, RandomAccessFile raf) throws IOException {
        raf.seek(0);
        raf.writeInt(table.size());
        for (Map.Entry<Integer, Integer> offset : table.entrySet()) {
            raf.writeInt(offset.getKey());
            raf.writeInt(offset.getValue());
        }
    }

    public static void loadOffsets(Map<Integer, Integer> offsetTable, String offsetFile) {
        try (RandomAccessFile raf = new RandomAccessFile(offsetFile, IOHelper.READ_MODE)) {
            int size = raf.readInt();
            for (int i = 0; i < size; i++) {
                offsetTable.put(raf.readInt(), raf.readInt());
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
