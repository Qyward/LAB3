using System;
using System.Collections.Generic;
using System.Text;

namespace OITApplication.Database
{
    public class Offer
    {
        public int Id {  get; set; }
        public string? Name { get; set; }
        public string? Lable {  get; set; }
        public byte[]? Image { get; set; }

        public Offer(string? name, string? lable, byte[]? image)
        {
            Name = name;
            Lable = lable;
            Image = image;
        }
    }
}
