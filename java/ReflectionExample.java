import java.lang.reflect.*;

public class ReflectionExample {
    public static void main(String[] args) throws Exception {
        Class<?> cls = Class.forName("java.util.ArrayList");
        
        // Get all public methods
        for (Method method : cls.getMethods()) {
            System.out.println(method.getName());
        }
        
        // Create instance and call method
        Object list = cls.getConstructor().newInstance();
        Method addMethod = cls.getMethod("add", Object.class);
        addMethod.invoke(list, "Hello Reflection");
        
        System.out.println(list);
    }
}