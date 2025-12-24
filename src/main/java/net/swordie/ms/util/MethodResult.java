package net.swordie.ms.util;

public class MethodResult<T> {
    private T result;
    private boolean success;
    private String errorMessage;

    public MethodResult(T result) {
        this.result = result;
        success = true;
    }

    public MethodResult(String errorMessage) {
        this.errorMessage = errorMessage;
    }

    public T getResult() {
        return result;
    }

    public boolean isSuccess() {
        return success;
    }

    public String getErrorMessage() {
        return errorMessage;
    }
}
