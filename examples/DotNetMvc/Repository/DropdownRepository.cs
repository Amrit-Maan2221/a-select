using DotNetMvc.DTOs;

namespace DotNetMvc.Repository;

public class DropdownRepository
{

    public List<DropdownDTO> GetAllDropdown()
    {
        return new List<DropdownDTO>()
        {
            new DropdownDTO
            {
                chDropdownId = "Order",
                nvcSqlQuery = "SELECT [idOrderId], vcOrderNo , decPrice, vcCustomerName as vcCustomer FROM Order WHERE {{filters}} AND bitActive = 1 ORDER BY vcCompanyName",
                bitImplementPagination = true,
                vcValColumn = "idOrderId",
                vcTextColumn = "vcOrderNo",
                vcSkippedColumns = "idOrderId",
                ColumnMappings = new Dictionary<string, string>()
                {
                    ["vcCustomer"] = "vcCustomerName"
                }
            }
        };
    }
}
