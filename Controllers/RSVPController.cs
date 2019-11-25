using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace robbie_and_weinye_2020.Controllers
{
    public class RSVPController
    {
        private static readonly string[] Comments = new[]
        {
            "Thank you for inviting us!",
            "You two are a beautiful couple",
            "Congratulations!",
            "Looking forward to it!",
            "Great choice in venue!",
            "I'm so happy for you two!",
            "Woohoo! I'm so excited!!"
        };

        private readonly ILogger<RSVPController> _logger;

        public RSVPController(ILogger<RSVPController> logger)
        {
            _logger = logger;
        }

        [HttpGet("[action]")]
        public IEnumerable<RSVP> RSVPs()
        {
            var rng = new Random();
            return Enumerable.Range(1, 5).Select(index => new RSVP
            {
                CreatedDate = DateTime.Now.AddDays(index),
                Name = "Test Testerson",
                Email = "test@test.com",
                RSVPCountAdult = 1,
                RSVPCountChildren = 1,
                Comment = Comments[rng.Next(Comments.Length)]
            })
            .ToArray();
        }
    }
}
