using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DCustomerController : ControllerBase
    {
        private readonly CustomerDBContext _context;

        public DCustomerController(CustomerDBContext context)
        {
            _context = context;
        }

        // GET: api/DCustomer
        [HttpGet]
        public async Task<ActionResult<IEnumerable<DCustomer>>> GetDCustomers()
        {
            return await _context.DCustomer.ToListAsync();
        }

        // GET: api/DCustomer/5
        [HttpGet("{id}")]
        public async Task<ActionResult<DCustomer>> GetDCustomer(int id)
        {
            var dCustomer = await _context.DCustomer.FindAsync(id);

            if (dCustomer == null)
            {
                return NotFound();
            }

            return dCustomer;
        }



        // PUT: api/DCustomer/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDCustomer(int id, DCustomer dCustomer)
        {
            //if (id != dCustomer.id)
            //{
            //    return BadRequest();
            //}

            dCustomer.id = id;

            _context.Entry(dCustomer).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DCustomerExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/DCustomer
        [HttpPost]
        public async Task<ActionResult<DCustomer>> PostDCustomer(DCustomer dCustomer)
        {
            _context.DCustomer.Add(dCustomer);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetDCustomer", new { id = dCustomer.id }, dCustomer);
        }

        // DELETE: api/DCustomer/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDCustomer(int id)
        {
            var dCustomer = await _context.DCustomer.FindAsync(id);
            if (dCustomer == null)
            {
                return NotFound();
            }

            _context.DCustomer.Remove(dCustomer);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool DCustomerExists(int id)
        {
            return _context.DCustomer.Any(e => e.id == id);
        }
    }
}
