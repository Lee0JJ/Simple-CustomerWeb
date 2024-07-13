using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebAPI.Models
{
    public class DCustomer
    {
        [Key]
        public int id { get; set; }

        [Column(TypeName = "VARCHAR(100)")]
        public string name { get; set; }

        [Column(TypeName = "VARCHAR(14)")]
        public string ic_number { get; set; }

        [Column(TypeName = "DATE")]
        public DateTime date_of_birth { get; set; }

        [Column(TypeName = "VARCHAR(100)")]
        public string address { get; set; }

        [Column(TypeName = "VARCHAR(20)")]
        public string address_country { get; set; }

        [Column(TypeName = "VARCHAR(20)")]
        public string address_postcode { get; set; }

    }
}
