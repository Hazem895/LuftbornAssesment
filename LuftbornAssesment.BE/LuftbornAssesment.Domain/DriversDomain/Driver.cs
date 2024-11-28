using System.Text.Json.Serialization;

namespace LuftbornAssesment.Domain.DriversDomain
{
    public class Driver
    {
        [JsonPropertyName("id")]
        public int Id { get; set; }
        [JsonPropertyName("driverId")]
        public Guid? DriverId { get; set; }
        [JsonPropertyName("firstname")]
        public string? Firstname { get; set; }
        [JsonPropertyName("lastname")]
        public string? Lastname { get; set; }
        [JsonPropertyName("email")]
        public string? Email { get; set; }
        [JsonPropertyName("phoneNumber")]
        public string? PhoneNumber { get; set; }
    }
}
