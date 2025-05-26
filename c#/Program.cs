using System.Data.SqlClient;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.MapPost("/api/register", async (HttpContext context) =>
{
    var form = await context.Request.ReadFormAsync();
    var name = form["name"];
    var email = form["email"];
    var eventName = form["event"];

    var connStr = "Server=localhost;Database=EventPortal;Trusted_Connection=True;";
    using var conn = new SqlConnection(connStr);
    await conn.OpenAsync();

    var userIdCmd = new SqlCommand("IF NOT EXISTS (SELECT 1 FROM Users WHERE email=@e) INSERT INTO Users (name, email) VALUES (@n, @e); SELECT user_id FROM Users WHERE email=@e;", conn);
    userIdCmd.Parameters.AddWithValue("@n", name);
    userIdCmd.Parameters.AddWithValue("@e", email);
    var userId = (int)(await userIdCmd.ExecuteScalarAsync());

    var eventIdCmd = new SqlCommand("SELECT event_id FROM Events WHERE title = @t;", conn);
    eventIdCmd.Parameters.AddWithValue("@t", eventName);
    var eventId = (int)(await eventIdCmd.ExecuteScalarAsync());

    var regCmd = new SqlCommand("INSERT INTO Registrations (user_id, event_id) VALUES (@uid, @eid);", conn);
    regCmd.Parameters.AddWithValue("@uid", userId);
    regCmd.Parameters.AddWithValue("@eid", eventId);
    await regCmd.ExecuteNonQueryAsync();

    return Results.Ok("Registered successfully");
});

app.Run();
