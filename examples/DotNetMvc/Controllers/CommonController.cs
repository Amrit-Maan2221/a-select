using DotNetMvc.DTOs;
using DotNetMvc.Repository;
using Microsoft.AspNetCore.Mvc;
namespace DotNetMvc.Controllers;

public class CommonController(DropdownRepository dropDownRepo) : Controller
{
    public async Task<JsonResult> Dropdown(string id, string search, string start, string length, string valColumn, string selectedValue, bool onlyFetchSelectedRow, bool initialLoad, List<string> headers, Dictionary<string, string> dependsOn)
    {
        // Logic to handle dropdown data fetching using dropDownRepo
        List<DropdownDTO> listAllDropdowns = dropDownRepo.GetAllDropdown();
        DropdownDTO dropdown = listAllDropdowns.First(x => x.chDropdownId == id);

        List<Dictionary<string, object>> data = null; // TODO: Implement your logic. I am leaving this intentionally.. your should know how you should fetch your data.
        Dictionary<string, object> selectedRow = null;

        if (onlyFetchSelectedRow)
        {
            if (string.IsNullOrEmpty(selectedValue))
            {
                throw new InvalidOperationException("Select value cannot be empty");
            }


            string sql = dropdown.nvcSqlQuery.Replace("{{filters}}", $"({dropdown.vcValColumn} = @valColumn)"); // this is okay as we in the backend control what is the dropdown.vcValColumn...

            var parameters = new Dictionary<string, dynamic>
            {
                { "@valColumn", selectedValue },
            };
            foreach (var kv in dependsOn)
            {
                parameters[kv.Key] = kv.Value;
            }
            selectedRow = null; // TODO: Implement your logic. I am leaving this intentionally.. your should know how you should fetch your data. This should be return if onlyFetchSelectedRow is true. This maybe a Db repo Call
        }
        else
        {
            data = null; // TODO: Implement your logic. I am leaving this intentionally.. your should know how you should fetch your data.  This maybe a Db repo Call
        }
        return Json(new { data, selectedRow, dropdown.vcValColumn, dropdown.vcTextColumn, dropdown.bitImplementPagination, dropdown.vcSkippedColumns });
    }
}
