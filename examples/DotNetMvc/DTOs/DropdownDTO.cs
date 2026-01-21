namespace DotNetMvc.DTOs
{
    public class DropdownDTO
    {
        public string chDropdownId { get; set; }
        public string nvcSqlQuery { get; set; }
        public bool bitImplementPagination { get; set; }
        public string vcValColumn { get; set; }
        public string vcTextColumn { get; set; }
        public string vcSkippedColumns { get; set; }
        public string vcSkippedSearchColumns { get; set; }
        public Dictionary<string, string> ColumnMappings { get; set; }
    }
}
