package net.swordie.ms.connection.db.converters;

import javax.sql.rowset.serial.SerialBlob;
import java.sql.Blob;
import java.sql.SQLException;

public class BlobByteArrayConverter {

    public static byte[] fromDbColumn(Blob blob) throws SQLException {
        if (blob == null) {
            return null;
        }
        return blob.getBytes(1, (int) blob.length());
    }

    public static Blob toDbColumn(byte[] arr) {
        if (arr == null) {
            return null;
        }
        try {
            return new SerialBlob(arr);
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
        return null;
    }
}
