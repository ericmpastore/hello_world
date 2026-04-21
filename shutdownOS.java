import java.io.IOException;

class ShutdownOS
{
    /*
        A system shutdown demo in Java.
        EPastore, 04/20/2026
    */
    public static void main(String[] args)
    {
        try
        {
            Runtime.getRuntime().exec("shutdown /s /t 1");
        } catch (IOException e) 
            {
                e.printStackTrace();
            }
    }
}