import java.sql.*;

public class JdbcCrudOperations {
    public static void main(String[] args) throws SQLException {
        String url = "jdbc:mysql://localhost:3306/testdb";
        String user = "root";
        String password = "password";
        
        try (Connection conn = DriverManager.getConnection(url, user, password)) {
            // Insert
            PreparedStatement insert = conn.prepareStatement(
                "INSERT INTO users (username, email) VALUES (?, ?)");
            insert.setString(1, "newuser");
            insert.setString(2, "new@example.com");
            insert.executeUpdate();
            
            // Update
            PreparedStatement update = conn.prepareStatement(
                "UPDATE users SET email = ? WHERE username = ?");
            update.setString(1, "updated@example.com");
            update.setString(2, "newuser");
            update.executeUpdate();
        }
    }
}