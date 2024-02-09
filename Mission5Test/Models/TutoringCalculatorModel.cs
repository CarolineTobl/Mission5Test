// Models/TutoringCalculatorModel.cs
namespace Mission5WebApp.Models
{
    public class TutoringCalculatorModel
    {
        public double Hours { get; set; }
        public double Rate { get; set; } = 50.0; // Default rate per hour
        // The Total calculation will be done in JavaScript on the client-side
    }
}

