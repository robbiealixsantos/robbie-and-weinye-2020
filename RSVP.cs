using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace robbie_and_weinye_2020
{
    public class RSVP
    {
        public DateTime CreatedDate { get; set; }

        public string Name { get; set; }

        public string Email { get; set; }

        public string PhoneNumber { get; set; }

        public int RSVPCountAdult { get; set; }

        public int RSVPCountChildren { get; set; }

        public string Comment { get; set; }
    }
}
