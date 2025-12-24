package net.swordie.ms.loaders;

import java.io.IOException;
import java.io.RandomAccessFile;

/**
 * Created on 3/8/2018.
 */
public interface DatSerializable {

    void write(RandomAccessFile dos) throws IOException ;

    DatSerializable load(RandomAccessFile dis) throws IOException ;
}
